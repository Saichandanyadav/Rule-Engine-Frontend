import { useEffect, useState } from 'react';
import { getAllRules, deleteRule, updateRule } from '../../services/ruleApi';
import './RuleList.css';

const RuleList = () => {
    const [rules, setRules] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [ruleToDelete, setRuleToDelete] = useState(null);
    const [ruleToUpdate, setRuleToUpdate] = useState({
        _id: '',
        name: '',
        description: '',
        ruleString: ''
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        const fetchRules = async () => {
            const data = await getAllRules();
            setRules(data);
        };

        fetchRules();
    }, []);

    const handleDeleteConfirmation = (id) => {
        setRuleToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        await deleteRule(ruleToDelete);
        setRules(rules.filter(rule => rule._id !== ruleToDelete));
        setShowDeleteModal(false); 
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleUpdateClick = (rule) => {
        setRuleToUpdate(rule);
        setShowUpdateModal(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        await updateRule(ruleToUpdate._id, ruleToUpdate);
        const updatedRules = await getAllRules();
        setRules(updatedRules);

        setShowUpdateModal(false);
        setUpdateSuccess(true);
        setTimeout(() => setUpdateSuccess(false), 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRuleToUpdate((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const cancelUpdate = () => {
        setShowUpdateModal(false);
        setRuleToUpdate({
            _id: '',
            name: '',
            description: '',
            ruleString: ''
        });
    };

    return (
        <div className="rule-list-container">
            <h2>All Rules</h2>
            <div className="rule-cards">
                {rules.map(rule => (
                    <div key={rule._id} className="rule-card">
                        <div className='margin-space'>
                            <h3>{rule.name}</h3>
                        </div>
                        <div className="margin-space">
                            <p>{rule.description}</p>
                        </div>
                        <div className="margin-space">
                            <p><strong>Rule String:</strong> {rule.ruleString}</p>
                        </div>
                        <div>
                            <button className='button-container' onClick={() => handleUpdateClick(rule)}>Edit</button>
                            <button onClick={() => handleDeleteConfirmation(rule._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Are you sure you want to delete this rule?</h3>
                        <button onClick={confirmDelete}>Confirm Delete</button>
                        <button onClick={closeDeleteModal}>Close</button>
                    </div>
                </div>
            )}

            {showUpdateModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Update Rule</h3>
                        <form onSubmit={handleUpdateSubmit}>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={ruleToUpdate.name}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={ruleToUpdate.description}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Save</button>
                            <button type="button" onClick={cancelUpdate}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}

            {updateSuccess && (
                <div className="update-success">
                    <p>Rule updated successfully!</p>
                </div>
            )}
        </div>
    );
};

export default RuleList;
