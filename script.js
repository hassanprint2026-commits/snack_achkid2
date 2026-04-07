function snackApp() {
    return {
        currentHero: 0,
        selectedCategory: null,
        heroImages: [
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop"
        ],
        contactInfo: {
            phone: "06 68 70 66 31",
            whatsapp: "212668706631",
            hours: "مفتوح · يغلق عند الساعة 2:00 ص",
            priceRange: "1–50 د.م.",
            location: "مراكش، المغرب (Marrakech)"
        },
        menuData: [
            {
                id: "tacos",
                title: "Tacos",
                titleAr: "طاكوس",
                image: "public/tacos.jpg",
                items: [
                    { name: "Tacos Viande Hachée", nameAr: "طاكوس كفتة", price: 40, priceSmall: 25 },
                    { name: "Tacos Saucisse", nameAr: "طاكوس صوصيص", price: 40, priceSmall: 25 },
                    { name: "Tacos Poulet", nameAr: "طاكوس دجاج", price: 40, priceSmall: 25 },
                    { name: "Tacos Shawarma", nameAr: "طاكوس شوارما", price: 40, priceSmall: 25 },
                    { name: "Tacos Crispy", nameAr: "طاكوس كريسبي", price: 40, priceSmall: 25 },
                    { name: "Tacos Nuggets", nameAr: "طاكوس نوكيت", price: 40, priceSmall: 25 },
                    { name: "Tacos Mixte", nameAr: "طاكوس ميكست", price: 45, priceSmall: 30 },
                    { name: "Tacos Cordon Bleu", nameAr: "طاكوس كوردون بلو", price: 45, priceSmall: 30 },
                    { name: "Tacos Fruit De Mer", nameAr: "طاكوس فواكه البحر", price: 45, priceSmall: 30 },
                    { name: "Tacos Achkid", nameAr: "طاكوس أشيد", price: 50, priceSmall: 35 }
                ]
            },
            {
                id: "pizza",
                title: "Pizza",
                titleAr: "بيتزا",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
                items: [
                    { name: "Pizza Margherita", nameAr: "بيتزا مارغاريتا", price: 25, priceSmall: 15 },
                    { name: "Pizza Thon", nameAr: "بيتزا طون", price: 30, priceSmall: 20 },
                    { name: "Pizza Végétarienne", nameAr: "بيتزا خضر", price: 25, priceSmall: 17 },
                    { name: "Pizza Viande Hachée", nameAr: "بيتزا كفتة", price: 30, priceSmall: 20 },
                    { name: "Pizza Dinde", nameAr: "بيتزا داند", price: 30, priceSmall: 20 },
                    { name: "Pizza Shawarma", nameAr: "بيتزا شوارما", price: 30, priceSmall: 20 },
                    { name: "Pizza 4 Fromages", nameAr: "بيتزا أربعة أجبان", price: 30, priceSmall: 20 },
                    { name: "Pizza Charcuterie", nameAr: "بيتزا شاركوتري", price: 30, priceSmall: 20 },
                    { name: "Pizza 4 Saisons", nameAr: "بيتزا أربعة فصول", price: 35, priceSmall: 25 },
                    { name: "Pizza Fruit De Mer", nameAr: "بيتزا فواكه البحر", price: 35, priceSmall: 25 },
                    { name: "Pizza Royale", nameAr: "بيتزا رويال", price: 40, priceSmall: 25 },
                    { name: "Pizza Achkid", nameAr: "بيتزا أشيد", price: 45, priceSmall: 35 }
                ]
            },
            {
                id: "burger",
                title: "Burger",
                titleAr: "برغر",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
                items: [
                    { name: "Burger Normal", nameAr: "برغر عادي", price: 18 },
                    { name: "Cheese Burger", nameAr: "تشيز برغر", price: 20 },
                    { name: "Double Cheese Burger", nameAr: "دوبل تشيز برغر", price: 30 },
                    { name: "Chicken Burger", nameAr: "تشكن برغر", price: 25 },
                    { name: "Burger Achkid", nameAr: "برغر أشيد", price: 35 }
                ]
            },
            {
                id: "calzone",
                title: "Calzone",
                titleAr: "كلزون",
                image: "public/calzone.jpg",
                items: [
                    { name: "Calzone Viande Hachée", nameAr: "كلزون كفتة", price: 25 },
                    { name: "Calzone Dinde", nameAr: "كلزون داند", price: 25 },
                    { name: "Calzone Thon", nameAr: "كلزون طون", price: 25 },
                    { name: "Calzone Mixte", nameAr: "كلزون ميكست", price: 30 },
                    { name: "Calzone Royale", nameAr: "كلزون رويال", price: 35 }
                ]
            },
            {
                id: "gratin",
                title: "Gratiné",
                titleAr: "كراتيني",
                image: "public/gratine.jpg",
                items: [
                    { name: "Gratiné Viande Hachée", nameAr: "كراتيني كفتة", price: 45 },
                    { name: "Gratiné Poulet", nameAr: "كراتيني دجاج", price: 45 },
                    { name: "Gratiné Mixte", nameAr: "كراتيني ميكست", price: 50 },
                    { name: "Gratiné Achkid", nameAr: "كراتيني أشيد", price: 50 }
                ]
            },
            {
                id: "sandwich",
                title: "Sandwich",
                titleAr: "سندويش",
                image: "public/sandwich.jpg",
                items: [
                    { name: "Sandwich Viande Hachée", nameAr: "سندويش كفتة", price: 17 },
                    { name: "Sandwich Saucisse", nameAr: "سندويش صوصيص", price: 17 },
                    { name: "Sandwich Poulet", nameAr: "سندويش دجاج", price: 17 },
                    { name: "Sandwich Thon", nameAr: "سندويش طون", price: 15 },
                    { name: "Sandwich Mixte", nameAr: "سندويش ميكست", price: 20 },
                    { name: "Sandwich Achkid", nameAr: "سندويش أشيد", price: 25 }
                ]
            },
            {
                id: "pasticcio",
                title: "Pasticcio",
                titleAr: "باستيشيو",
                image: "public/pasticcio.jpg",
                items: [
                    { name: "Pasticcio Dinde Fumée", nameAr: "باستيشيو داند فومي", price: 25 },
                    { name: "Pasticcio Viande Hachée", nameAr: "باستيشيو كفتة", price: 25 },
                    { name: "Pasticcio Poulet", nameAr: "باستيشيو دجاج", price: 25 },
                    { name: "Pasticcio Mixte", nameAr: "باستيشيو ميكست", price: 30 }
                ]
            },
            {
                id: "shawarma",
                title: "Shawarma",
                titleAr: "شوارما",
                image: "public/shawarma.jpg",
                items: [
                    { name: "Shawarma Normal", nameAr: "شوارما عادية", price: 18 },
                    { name: "Shawarma Frites", nameAr: "شوارما فريت", price: 20 },
                    { name: "Shawarma Fromage", nameAr: "شوارما فرماج", price: 22 },
                    { name: "Shawarma Plate", nameAr: "شوارما طبق", price: 30 }
                ]
            },
            {
                id: "panini",
                title: "Panini",
                titleAr: "بانيني",
                image: "public/panini.jpg",
                items: [
                    { name: "Panini Fromage", nameAr: "بانيني فرماج", price: 10 },
                    { name: "Panini Thon", nameAr: "بانيني طون", price: 15 },
                    { name: "Panini Viande Hachée", nameAr: "بانيني كفتة", price: 18 },
                    { name: "Panini Mixte", nameAr: "بانيني ميكست", price: 20 },
                    { name: "Panini Achkid", nameAr: "بانيني أشيد", price: 25 }
                ]
            },
            {
                id: "bocadillos",
                title: "Bocadillos",
                titleAr: "بوكاديوس",
                image: "public/bocadillos.jpg",
                items: [
                    { name: "Bocadillos Normal", nameAr: "بوكاديوس", price: 12 },
                    { name: "Bocadillos Plat", nameAr: "بوكاديوس طبسيل", price: 15 }
                ]
            },
            {
                id: "tortilla",
                title: "Tortilla",
                titleAr: "طورطية",
                image: "public/tortilla.jpg",
                items: [
                    { name: "Tortilla", nameAr: "طورطية", price: 10 },
                    { name: "Tortilla Plat", nameAr: "طبق طورطية", price: 15 },
                    { name: "Tortilla Viande Hachée", nameAr: "طورطية كفتة", price: 17 }
                ]
            },
            {
                id: "tajine",
                title: "Tajine",
                titleAr: "طاجين",
                image: "public/tajine.jpg",
                items: [
                    { name: "Tajine Viande Hachée", nameAr: "طاجين كفتة", price: 20 },
                    { name: "Tajine Poulet", nameAr: "طاجين دجاج", price: 20 },
                    { name: "Tajine Fruit De Mer", nameAr: "طاجين فواكه البحر", price: 30 }
                ]
            },
            {
                id: "jus",
                title: "Jus",
                titleAr: "عصائر",
                image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1000&auto=format&fit=crop",
                items: [
                    { name: "Jus Orange", nameAr: "عصير الليمون", price: 12 },
                    { name: "Jus Panaché", nameAr: "عصير بناشي", price: 15 },
                    { name: "Jus Avocat", nameAr: "عصير أفوكا", price: 17 },
                    { name: "Jus Za3za3", nameAr: "عصير زعزع", price: 35 }
                ]
            }
        ],
        init() {
            setInterval(() => {
                this.currentHero = (this.currentHero + 1) % this.heroImages.length;
            }, 5000);
            setTimeout(() => {
                if (window.lucide) lucide.createIcons();
            }, 100);
        },
        openWhatsApp(itemName) {
            const message = itemName 
                ? `مرحباً سناك أشيد، أريد طلب: ${itemName}`
                : "مرحباً سناك أشيد، أريد الاستفسار عن القائمة";
            window.open(`https://wa.me/${this.contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        }
    }
}