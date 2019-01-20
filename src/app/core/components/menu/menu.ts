import { Menu } from './menu.metadata';



export const MENUS: Menu[] = [
    {
        'header': 'MAIN NAVIGATION',
        'order': 0
    },
    {
        'title': 'Home',
        'icon': 'home',
        'link': '/home',
        'external': false,
        'target': '_blank',
        'order': 1
    },
    {
        'title': 'Site',
        'icon': 'link',
        'link': '/site',
        'external': false,
        'target': '_blank',
        'order': 100
    },
    {
        'title': 'Registration',
        'icon': 'share',
        'external': false,
        'target': '_blank',
        'order': 3,
        'sublinks': [
            {
                'title': 'Starships & Vehicles',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank',
                'sublinks': [
                    {
                        'title': 'Starships',
                        'link': '/starships',
                        'icon': 'circle-o text-aqua',
                        'external': false,
                        'target': '_blank'
                    },
                    {
                        'title': 'Vehicles',
                        'link': '/vehicles',
                        'icon': 'circle-o text-aqua',
                        'external': false,
                        'target': '_blank'
                    }
                ]
            },
            {
                'title': 'People',
                'link': '/people',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Species',
                'link': '/species',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Planets',
                'link': '/planets',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Films',
                'link': '/films',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            }
        ]
    }
];