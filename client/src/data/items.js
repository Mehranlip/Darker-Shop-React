const productList = [
    {
        id: "1",
        title: "MacBook Pro",
        price: 180000000,
        image: "/images/product.jpg",
        cat: "LopTop",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."
    },
    {
        id: "2",
        title: "AirPad",
        price: 15000000,
        image: "/images/airpads.jpg",
        cat: "headphone",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "3",
        title: "headphones",
        price: 50000000,
        image: "/images/headphone.jfif",
        cat: "headphone",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "4",
        title: "iPad",
        price: 60000000,
        image: "/images/ipad.jpg",
        cat: "Tablet",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "5",
        title: "MacBook Air",
        price: 45000000,
        image: "/images/macbook-air.jfif",
        cat: "LopTop",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "6",
        title: "Apple Mouse",
        price: 8000000,
        image: "/images/mouse.jfif",
        cat: "Mouse",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "7",
        title: "Apple Watch",
        price: 45000000,
        image: "/images/watch.jpg",
        cat: "Watch",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
    {
        id: "8",
        title: "iPhone",
        price: 12000000,
        image: "/images/iphone.jpg",
        cat: "Phone",
        description: "بهترین تجربه از فناوری را با لپ‌تاپ ایکس‌تاپ مدل ProBook 2023 تجربه کنید. این لپ‌تاپ از آخرین دستاوردهای فناوری و طراحی‌های مدرن بهره می‌برد تا تمامی نیازهای تجاری و روزمانه‌ی شما را با اعتماد و بهره‌وری بالا برآورده کند. با صفحه نمایش بزرگ و وضوح بالا، عملکرد قدرتمند، ذخیره‌سازی فراوان و امنیت برتر، لپ‌تاپ ProBook 2023 انتخابی استثنایی برای کسانی است که از یک رفیق قوی و قابل اطمینان برای همه‌ی فعالیت‌ها بهره می‌برند."

    },
]

function getProductData(id) {
    let productData = productList.find((item) => item.id === id)
    return productData
}

export { productList, getProductData }