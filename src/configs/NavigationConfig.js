import { 
  DashboardOutlined,
   // Added Icons for Sidebar items
  ShoppingOutlined,
  ShoppingCartOutlined,
	UserOutlined,
	PictureOutlined,
	GiftOutlined,
	ShopOutlined,
	UsergroupAddOutlined,
	MailOutlined,
	SettingOutlined,
	MobileOutlined,
	FileTextOutlined,
} from '@ant-design/icons';

import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'main',
  icon: '',
  breadcrumb: false,
  submenu: []
  },
  
]

const systemNavTree = [
	{
		key: 'system',
		path: `${APP_PREFIX_PATH}/system`,
		title: 'sidenav.system',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'system-settings',
				path: `${APP_PREFIX_PATH}/system/settings`,
				title: 'sidenav.system.settings',
				icon: SettingOutlined,
				breadcrumb: true,
				submenu: [],
			},
			{
				key: 'system-mobileApp',
				path: `${APP_PREFIX_PATH}/system/mobile-app`,
				title: 'sidenav.system.mobileApp',
				icon: MobileOutlined,
				breadcrumb: true,
				submenu: [],
			},
			{
				key: 'system-logs',
				path: `${APP_PREFIX_PATH}/system/logs`,
				title: 'sidenav.system.logs',
				icon: FileTextOutlined,
				breadcrumb: true,
				submenu: [],
			},
		],
	},
];

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
