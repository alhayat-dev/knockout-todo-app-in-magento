define([
    'ko'
], function (ko) {
    'use strict';

    return ko.observableArray([
        {
            "id": 1,
            "title": "Meetings",
            "description": "Attend daily meetings and discuss agenda.",
            "start_date": "10 Mar 2023",
            "end_date": "14 Mar 2023",
            "completed_tasks": 5,
            "total_tasks": 10
        },
        {
            "id": 2,
            "title": "Prototype Design",
            "description": "Split the prototype design into small tasks.",
            "start_date": "15 Mar  2023",
            "end_date": "19 Mar  2023",
            "completed_tasks": 3,
            "total_tasks": 15
        },
        {
            "id": 3,
            "title": "Plan and Execution",
            "description": "Create strategy and execute a development plan on it.",
            "start_date": "18 Mar  2023",
            "end_date": "26 Mar  2023",
            "completed_tasks": 6,
            "total_tasks": 9
        },
        {
            "id": 4,
            "title": "Deployments",
            "description": "Perform scheduled deployment on production.",
            "start_date": "18 Mar  2023",
            "end_date": "26 Mar  2023",
            "completed_tasks": 7,
            "total_tasks": 18
        }
    ]);
})
