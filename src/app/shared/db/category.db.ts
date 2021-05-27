import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'FS Queries',
        icon: 'local_fire_department',
        value: 'movie',
        color: 'teal',
        url: '/home/relatedparty'
    },
    {
        title: 'Service Catalog CRUD',
        icon: 'playlist_add',
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