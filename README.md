# retention-dashboard
# Retention Dashboard

## Overview
A React component for visualizing user retention metrics with dynamic data visualization and robust error handling.

## Features
- Dynamic chart rendering
- Responsive design
- Metric selection
- Error handling
- Accessibility support

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Installation
```bash
git clone https://github.com/yourusername/retention-dashboard.git
cd retention-dashboard
npm install
npm start
```

```jsx
import React from 'react';
import RetentionDashboard from './RetentionDashboard';

function App() {
  const retentionData = [
    { cohort: "Jan", month6: 59.4, totalUsers: 2854 },
    { cohort: "Feb", month6: 55.7, totalUsers: 2960 }
  ];

  return (
    <RetentionDashboard 
      data={retentionData}
      title="Monthly User Retention"
    />
  );
}

export default App;
```

