import { useState } from 'react';
import { createRule } from '../../services/ruleApi';
import './CreateRule.css';

const CreateRule = () => {
  const [ruleData, setRuleData] = useState({
    ruleString: '',
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    setRuleData({ ...ruleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRule(ruleData);
    alert('Rule created successfully!');
  };

  return (
    <div className="bg-container">
    <div className="create-rule-container">
    <form onSubmit={handleSubmit}>
        <input type="text" name="ruleString" placeholder="Rule String" onChange={handleChange} />
        <input type="text" name="name" placeholder="Rule Name" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <button type="submit">Create Rule</button>
      </form>
    </div>
    </div>
  );
};

export default CreateRule;
