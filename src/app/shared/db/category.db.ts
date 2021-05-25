import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'Related Parties',
        icon: 'movie',
        value: 'movie',
        color: 'teal',
        url: '/home/relatedparty'
    },
    {
        title: 'servicecatalog',
        icon: 'games',
        value: 'game',
        color: 'cyan',
        url: '/home/servicecatalog'
    },
    {
        title: 'servicecategoryref',
        icon: 'star',
        value: 'favorite',
        color: '#c2185b',
        url: '/home/servicecategory'
    }
];