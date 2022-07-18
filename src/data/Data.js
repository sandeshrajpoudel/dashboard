import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilEnvelope,
    UilCog ,
    UilIncomingCall,
    UilCalendarAlt,
  } from "@iconscout/react-unicons";
  import img1 from "../img/img1.png";
  import img2 from "../img/img2.png";
  import img3 from "../img/img3.png";

  export const NavbarData=[
    {
      icon: UilCalendarAlt,
      title: "Calendar",
      to:""
    },
    {
      icon: UilEnvelope,
      title: "Email",
      to:""
    },
    {
      icon: UilIncomingCall,
      title: "Contact",
      to:""
    },
     {
    icon: UilCog,
    title: "Setting",
    to:""
  },
]
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: "Customers",
    },
    {
      icon: UilPackage,
      heading: 'Products'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },{
      icon: UilChart,
      heading: 'Analytics'
    },{
      icon: UilChart,
      heading: 'Analytics'
    },{
      icon: UilChart,
      heading: 'Analytics'
    },{
      icon: UilChart,
      heading: 'Analytics'
    }
    ,{
      icon: UilChart,
      heading: 'Analytics'
    },
    {
      icon: UilSignOutAlt,
      heading: "SignOut",
      to: "red"
  },
  ];

  export const CardData=[
    {
    title:"Sales",
    circlebar:"60",
    color:{backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    boxShadow: "0px 10px 20px 0px #b07dda"},
    value:"20000",
    icon:UilUsdSquare,
    series:[{
      name:"Sales",
      data:[20,30,40,50,60],
    }]
  },
  {
    title:"Revenue", 
    circlebar:"80",
    color:{backGround:
      "linear-gradient(rgb(189, 102, 75) -146.42%, rgb(243, 183, 105) -46.42%)",
    boxShadow: "0px 1px 20px 0px #daaa5e"},
    value:"90000",
    icon: UilMoneyWithdrawal,
    series:[{
      name:"revenue",
      data:[200,300,400,500,600],
    }]
  },
  {
    title:"Expense",
    color:{backGround:"linear-gradient(180deg, #fd7c8b 0%, #FC929D 100%)",
    boxShadow: "0px 10px 20px 0px #e68a94"},
    circlebar:"90",
    value:"10000",
    icon: UilClipboardAlt,
    series:[{
      name:"Expenses",
      data:[20,30,40,30,20],
    }]
  }

];
export const UpdatesData = [
  {
    img: img1,
    name: "Zain Malik",
    notification: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "John Legend",
    notification: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Katy Perry",
    notification: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

  