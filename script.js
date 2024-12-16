// تفعيل القائمة المنسدلة عند النقر على الأيقونة
function toggleMenu() {
    const menu = document.getElementById('menu'); // الحصول على القائمة
    menu.classList.toggle('active'); // تفعيل وإلغاء تفعيل الفئة "active"
}

// إغلاق القائمة عند النقر على أيقونة الإغلاق
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active'); // إزالة الفئة "active" لإخفاء القائمة
}

const modal = document.getElementById('modal');

function showModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}


function showModal(projectId) {
    const modal = document.getElementById('modal');
    const swiperWrapper = document.getElementById('swiper-wrapper');
    // كود إضافي لعرض المشروع حسب projectId
    modal.classList.add('active');
}


// إظهار الفئة المختارة
function showCategory(category) {
    const categories = ['web', 'graphic', 'mobile'];
    categories.forEach(cat => {
        document.getElementById(cat).style.display = 'none';
    });
    document.getElementById(category).style.display = 'flex';
}

// عند تحميل الصفحة، يتم عرض فئة "ويب" بشكل افتراضي
window.onload = () => {
    showCategory('web');
};

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        autoStart: true, // لعرض الصور المصغرة تلقائيًا
    },
    Toolbar: {
        display: ["zoom", "slideShow", "fullScreen", "close"],
    },
});
