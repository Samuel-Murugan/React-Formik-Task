import React from 'react'
import DashboardBook from '../Books/DashboardBook'
import AddBook from '../Books/AddBook'
import EditBook from '../Books/EditBook'
import DashboardAuthor from '../Authors/DashboardAuthor'
import AddAuthor from '../Authors/AddAuthor'
import EditAuthor from '../Authors/EditAuthor'
import { Navigate } from 'react-router-dom'

const AppRoutes = [
    {
        path : '/',
        element : <DashboardBook/>,
        exact:true
    },
    {
        path : '/add-book',
        element : <AddBook/>,
        exact:true
    },
    {
        path : '/edit-book/:id',
        element : <EditBook/>,
        exact:true
    },
    {
        path : '/dashboard-author',
        element : <DashboardAuthor/>,
        exact:true
    },
    {
        path : '/add-author',
        element : <AddAuthor/>,
        exact:true
    },
    {
        path : '/edit-author/:id',
        element : <EditAuthor/>,
        exact:true
    },
    {
        path : '*',
        element : <Navigate to='/' />,
        exact:false
    }
]

export default AppRoutes