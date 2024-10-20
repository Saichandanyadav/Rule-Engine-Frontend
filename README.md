# Rule Management System

This project is a **Rule Management System** that allows users to create, view, update, and delete rules. It’s built using **React** and custom **CSS** for styling.

## Features

- **Create Rule**: Users can create new rules by filling out a form with the rule name, description, and rule string.
- **View Rules**: Displays all rules in a card layout, showing the rule name, description, and rule string.
- **Update Rule**: Users can edit any existing rule using a modal form that pops up when the "Edit" button is clicked.
- **Delete Rule**: Allows users to delete rules, with a confirmation modal to prevent accidental deletions.

## Technologies Used

- **React**: Used for building the user interface.
- **CSS**: For custom styling and layout.
- **Mock API**: Functions for handling rule operations (fetching, creating, updating, deleting).

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download Node.js from the [official website](https://nodejs.org/).

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/saichandan17/rule-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rule-management-system
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CreateRule.js
│   │   ├── RuleList.js
│   │   └── modals
│   ├── services
│   │   └── ruleApi.js
│   ├── styles
│   │   ├── CreateRule.css
│   │   └── RuleList.css
│   ├── App.js
│   ├── index.js
│   └── README.md
└── package.json
```

## Usage

1. **Create a Rule**:
   - Navigate to the "Create Rule" page.
   - Fill out the form with the rule name, description, and rule string.
   - Click **Create Rule** to save the new rule.

2. **View and Manage Rules**:
   - All the rules are displayed on the main page in card format.
   - Each rule has options to **Edit** or **Delete** the rule.

3. **Update a Rule**:
   - Click the **Edit** button on any rule’s card.
   - A modal will appear, allowing you to modify the rule's details.
   - Click **Save** to apply the changes.

4. **Delete a Rule**:
   - Click the **Delete** button on a rule's card to remove it.
   - A confirmation modal will be displayed before the deletion.

## API Endpoints (Mock)

The following API functions are used for managing rules:

- `getAllRules()`: Fetches all rules.
- `createRule(ruleData)`: Creates a new rule with the provided data.
- `updateRule(id, ruleData)`: Updates the rule by ID.
- `deleteRule(id)`: Deletes the rule by ID.

## My Details:
-Email: Saichandhanyadav2002@gmail.com
-LinkedIn: https://www.linkedin.com/in/saichandanyadav/
-GitHub: https://github.com/Saichandanyadav/

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

