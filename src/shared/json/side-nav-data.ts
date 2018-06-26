export const SideNavbarData = [
  {
    name: 'Dashboard',
    icon: 'fa-tachometer',
    url: '/dashboard',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Students',
    icon: 'fa-users',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/students/new',
        authority: 'ADMIN'
      },
      {
        name: 'Details',
        icon: 'fa-user',
        url: '/dashboard/students/details',
        authority: 'ADMIN'
      },
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/students',
        authority: 'ADMIN'
      },
      {
        name: 'Promotion',
        icon: 'fa-graduation-cap',
        url: '/dashboard/students/promotion',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Teachers',
    icon: 'fa-user-md',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/teachers/new',
        authority: 'ADMIN'
      },
      {
        name: 'Details',
        icon: 'fa-user',
        url: '/dashboard/teachers/details',
        authority: 'ADMIN'
      },
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/teachers',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Parents',
    icon: 'fa-user-secret',
    url: '/dashboard/parents',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Accounts',
    icon: 'fa-money',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Fee Collection',
        icon: 'fa-list',
        url: '/dashboard/accounts/collect-fee',
        authority: 'ADMIN'
      },
      {
        name: 'Create payment',
        icon: 'fa-list',
        url: '/dashboard/accounts/create-payment',
        authority: 'ADMIN'
      },
      {
        name: 'Cashbook',
        icon: 'fa-list',
        url: '/dashboard/accounts/cashbook',
        authority: 'ADMIN'
      },
      {
        name: 'Add income',
        icon: 'fa-list',
        url: '/dashboard/accounts/income',
        authority: 'ADMIN'
      },
      {
        name: 'Add expense',
        icon: 'fa-list',
        url: '/dashboard/accounts/expense',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Class',
    icon: 'fa-table',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Add class',
        icon: 'fa-plus',
        url: '/dashboard/classes/new',
        authority: 'ADMIN'
      },
      {
        name: 'Classes',
        icon: 'fa-plus',
        url: '/dashboard/classes',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Subject',
    icon: 'fa-clone',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Add subject',
        icon: 'fa-plus',
        url: '/dashboard/subjects/new',
        authority: 'ADMIN'
      },
      {
        name: 'Subjects',
        icon: 'fa-plus',
        url: '/dashboard/subjects',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Class Routine',
    icon: 'fa-object-ungroup',
    url: '/dashboard/class-routine',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Attendance',
    icon: 'fa-server',
    url: '/dashboard/attendance',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Exam',
    icon: 'fa-graduation-cap',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'Exam schedule',
        icon: 'fa-plus',
        url: '/dashboard/exams',
        authority: 'ADMIN'
      },
      {
        name: 'Exam grades',
        icon: 'fa-plus',
        url: '/dashboard/exam-grades',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Notice',
    icon: 'fa-map',
    url: '/dashboard/notice',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Message',
    icon: 'fa-envelope-o',
    url: '/dashboard/messages',
    authority: '',
    secondMeu: []
  },
  {
    name: 'UI elements',
    icon: 'fa-pie-chart ',
    url: '/dashboard/ui-elements',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Map',
    icon: 'fa-map-marker',
    url: '/dashboard/map',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Account',
    icon: 'fa-cog',
    url: '/dashboard/messages',
    authority: '',
    secondMeu: []
  }
];
