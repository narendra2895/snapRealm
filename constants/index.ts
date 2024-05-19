export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/home_q49qcu.png",
    },
    {
      label: "Image Restore",
      route: "/transformations/add/restore",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/curve-arrow_opr7wo.png",
    },
    {
      label: "Generative Fill",
      route: "/transformations/add/fill",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/ai_mplqe1.png",
    },
    {
      label: "Object Remove",
      route: "/transformations/add/remove",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/delete_ecp09c.png",
    },
    {
      label: "Object Recolor",
      route: "/transformations/add/recolor",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/color_qzx7x2.png",
    },
    {
      label: "Background Remove",
      route: "/transformations/add/removeBackground",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543835/delete-user_ldcwh6.png",
    },
    {
      label: "Profile",
      route: "/profile",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543835/profile-user_anpard.png",
    },
    {
      label: "Buy Credits",
      route: "/credits",
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543835/payment-method_tqsm8d.png",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 Free Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/assets/icons/free-plan.svg",
      price: 40,
      credits: 120,
      inclusions: [
        {
          label: "120 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Package",
      icon: "/assets/icons/free-plan.svg",
      price: 199,
      credits: 2000,
      inclusions: [
        {
          label: "2000 Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/curve-arrow_opr7wo.png",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Background Remove",
      subTitle: "Removes the background of the image using AI",
      config: { removeBackground: true },
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543835/delete-user_ldcwh6.png",
    },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/ai_mplqe1.png",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/delete_ecp09c.png",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "https://res.cloudinary.com/dldblks5t/image/upload/v1715543836/color_qzx7x2.png",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;