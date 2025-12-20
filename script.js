// اطلاعات ادمین
const adminCredentials = [
    { username: "Salar", password: "8711" },
    { username: "Miaad", password: "9248" },
    { username: "Hasti", password: "1304" }
];

// داده‌های نمونه
let appData = {
    users: [
        { id: 1, username: "user1", email: "user1@example.com", password: "password1", joinDate: "۱۴۰۲/۰۵/۱۲", status: "active", role: "user" },
        { id: 2, username: "user2", email: "user2@example.com", password: "password2", joinDate: "۱۴۰۲/۰۴/۲۵", status: "active", role: "user" },
        { id: 3, username: "user3", email: "user3@example.com", password: "password3", joinDate: "۱۴۰۲/۰۶/۰۳", status: "inactive", role: "moderator" },
        { id: 4, username: "user4", email: "user4@example.com", password: "password4", joinDate: "۱۴۰۲/۰۵/۲۰", status: "banned", role: "user" }
    ],
    adminQuestions: [
        { id: 1, text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ", user: "محمد رضایی", subject: "ریاضی", date: "۱۴۰۲/۰۶/۱۵", status: "approved" },
        { id: 2, text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است", user: "فاطمه احمدی", subject: "فیزیک", date: "۱۴۰۲/۰۶/۱۴", status: "pending" },
        { id: 3, text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده", user: "علی کریمی", subject: "شیمی", date: "۱۴۰۲/۰۶/۱۰", status: "rejected" }
    ],
    userQuestions: [],
    userScores: [],
    subjects: ["ریاضی", "فیزیک", "شیمی", "ادبیات", "زبان انگلیسی"],
    topics: [
        { id: 1, name: "ریاضیات", description: "موضوعات مربوط به ریاضی" },
        { id: 2, name: "علوم تجربی", description: "موضوعات مربوط به علوم تجربی" },
        { id: 3, name: "علوم انسانی", description: "موضوعات مربوط به علوم انسانی" }
    ],
    subjectChapters: {
        "ریاضی": ["جبر و معادله", "هندسه", "احتمال و آمار", "مثلثات", "حسابان"],
        "فیزیک": ["الکتریسیته", "مکانیک","نوسان و موج", "نیرو"],
        "شیمی": ["استوکیومتری", "اسید و باز", "شیمی آلی"],
        "ادبیات": ["دستور زبان", "تاریخ ادبیات", "آرایه های ادبی"],
        "زبان انگلیسی": ["گرامر", "لغات", "درک مطلب"]
    },
    currentUser: {
        totalScore: 0,
        monthlyScore: 0,
        questionsCount: 0,
        approvedCount: 0
    },
    // فیلترهای پیش‌فرض
    userFilters: {
        status: 'all',
        role: 'all',
        search: ''
    },
    questionFilters: {
        subject: 'all',
        status: 'all',
        search: '',
        displayMode: 'compact' // حالت‌های نمایش: compact, full
    },
    focusData: {
    focusScore: 0,
    focusLevel: 1,
    levelProgress: 0,
    totalSessions: 0,
    totalMinutes: 0,
    timeRecord: 0,
    todayScore: 0,
    achievements: [],
    unlockedItems: [],
    currentStreak: 0,
    bestStreak: 0
},
timerState: {
    isRunning: false,
    isPaused: false,
    mode: 'normal', // normal, pomodoro, challenge
    focusMinutes: 25,
    breakMinutes: 5,
    timeLeft: 1500, // 25 دقیقه به ثانیه
    timerInterval: null,
    sessionType: 'focus' // focus, break
},
achievements: [
    { id: 1, name: "تازه‌کار فوکوس", description: "اولین جلسه فوکوس را کامل کن", points: 100, unlocked: false },
    { id: 2, name: "تمرکز ۳۰ دقیقه‌ای", description: "یک جلسه ۳۰ دقیقه‌ای فوکوس کامل کن", points: 200, unlocked: false },
    { id: 3, name: "پومودورو ماستر", description: "۵ جلسه پومودورو کامل کن", points: 300, unlocked: false },
    { id: 4, name: "سری موفقیت‌ها", description: "۳ روز متوالی فوکوس کن", points: 400, unlocked: false },
    { id: 5, name: "فوکوس یک ساعته", description: "یک جلسه ۶۰ دقیقه‌ای کامل کن", points: 500, unlocked: false }
],
unlockableItems: [
    { id: 1, name: "تم طلایی", type: "theme", levelRequired: 3, unlocked: false },
    { id: 2, name: "صدای اعلان ویژه", type: "sound", levelRequired: 5, unlocked: false },
    { id: 3, name: "آیکون اختصاصی", type: "icon", levelRequired: 7, unlocked: false },
    { id: 4, name: "عنوان افسانه‌ای", type: "title", levelRequired: 10, unlocked: false }
]
};

// داده‌های نمونه برای سوالات
let sampleQuestions = [
    {
        id: 1,
        text: "اگر x + 2 = 5 باشد، مقدار x کدام است؟",
        subject: "ریاضی",
        chapter: "جبر و معادله",
        institution: "قلم چی",
        level: "easy",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
        detailedAnswer: "با حل معادله: x = 5 - 2 = 3",
        hasImage: false,
        score: 15
    },
    {
        id: 2,
        text: "مساحت دایره‌ای با شعاع 5 سانتی‌متر چقدر است؟ (π = 3.14)",
        subject: "ریاضی",
        chapter: "هندسه",
        institution: "گاج",
        level: "medium",
        options: ["78.5", "31.4", "15.7", "62.8"],
        correctAnswer: "1",
        detailedAnswer: "مساحت دایره = πr² = 3.14 × 25 = 78.5",
        hasImage: false,
        score: 30
    },
    {
        id: 3,
        text: "مشتق تابع f(x) = x³ + 2x² چیست؟",
        subject: "ریاضی",
        chapter: "حسابان",
        institution: "خیلی سبز",
        level: "hard",
        options: ["3x² + 4x", "3x² + 2x", "x² + 4x", "3x² + 2"],
        correctAnswer: "1",
        detailedAnswer: "f'(x) = 3x² + 4x",
        hasImage: false,
        score: 50
    }
];

// متغیرهای global برای آزمون فعلی
let currentExamQuestions = [];
let currentExamTitle = "";
let currentExamTime = "";

// نمایش اعلان
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification';
    notification.classList.add(type);
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// اعتبارسنجی فرم ورود
function validateLoginForm(username, password) {
    const usernameRegex = /^[a-zA-Z]{5}$/;
    const passwordRegex = /^\d{4,}$/;
    
    if (!usernameRegex.test(username)) {
        showNotification('نام کاربری باید دقیقاً ۵ حرف باشد', 'error');
        return false;
    }
    
    if (!passwordRegex.test(password)) {
        showNotification('رمز عبور باید حداقل ۴ رقم باشد و فقط شامل اعداد باشد', 'error');
        return false;
    }
    
    return true;
}

// مدیریت لاگین
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!validateLoginForm(username, password)) {
        return;
    }
    
    // بررسی ورود به عنوان ادمین
    const isAdmin = adminCredentials.some(cred => 
        cred.username === username && cred.password === password
    );
    
    if (isAdmin) {
        // ورود به عنوان ادمین
        document.getElementById('authPage').classList.add('hidden');
        document.getElementById('adminPanel').classList.remove('hidden');
        showNotification('خوش آمدید مدیر سیستم!', 'success');
        initializeAppData();
        renderAdminData();
    } else {
        // ورود به عنوان کاربر عادی
        document.getElementById('authPage').classList.add('hidden');
        document.getElementById('userPanel').classList.remove('hidden');
        showNotification('خوش آمدید!', 'success');
        initializeAppData();
        renderUserData();
    }
});

// مقداردهی اولیه داده‌های برنامه
function initializeAppData() {
    // پر کردن dropdownهای موضوع
    populateSubjectDropdowns();
    
    // مقداردهی اولیه dropdownهای مبحث
    initializeChapterDropdowns();
    
    // بروزرسانی آمار سوالات
    updateQuestionsStatistics();
    
    // مقداردهی اولیه تنظیمات سیستم
    initializeSystemSettings();
}

// پر کردن dropdownهای موضوع در تمام فرم‌ها
function populateSubjectDropdowns() {
    const subjectDropdowns = [
        'questionSubject', 'adminQuestionSubject', 'examSubject', 
        'builderSubject', 'editQuestionSubject'
    ];
    
    subjectDropdowns.forEach(dropdownId => {
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            // پاک کردن options فعلی (به جز اولین option)
            while (dropdown.options.length > 1) {
                dropdown.remove(1);
            }
            
            // اضافه کردن موضوعات
            appData.subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                dropdown.appendChild(option);
            });
        }
    });
}

// مقداردهی اولیه dropdownهای مبحث
function initializeChapterDropdowns() {
    const subjectChapterPairs = [
        { subjectId: 'questionSubject', chapterId: 'questionChapter' },
        { subjectId: 'adminQuestionSubject', chapterId: 'adminQuestionChapter' },
        { subjectId: 'examSubject', chapterId: 'examChapter' },
        { subjectId: 'builderSubject', chapterId: 'builderChapter' },
        { subjectId: 'editQuestionSubject', chapterId: 'editQuestionChapter' }
    ];
    
    subjectChapterPairs.forEach(pair => {
        const subjectDropdown = document.getElementById(pair.subjectId);
        const chapterDropdown = document.getElementById(pair.chapterId);
        
        if (subjectDropdown && chapterDropdown) {
            // مقداردهی اولیه بر اساس موضوع پیش‌فرض
            updateChapterOptions(subjectDropdown.value, pair.chapterId);
            
            // اضافه کردن event listener برای تغییر موضوع
            subjectDropdown.addEventListener('change', function() {
                updateChapterOptions(this.value, pair.chapterId);
                
                // بروزرسانی تعداد سوالات موجود در صورت لزوم
                if (pair.subjectId === 'examSubject') {
                    updateAvailableQuestionsCount();
                }
            });
        }
    });
}

// مقداردهی اولیه تنظیمات سیستم
function initializeSystemSettings() {
    renderTopicsList();
    renderSubjectsManagement();
}

// بروزرسانی مباحث درسی بر اساس موضوع انتخاب شده
function updateChapterOptions(subject, chapterSelectId) {
    const chapterSelect = document.getElementById(chapterSelectId);
    
    if (!chapterSelect) return;
    
    // پاک کردن options فعلی (به جز اولین option)
    while (chapterSelect.options.length > 1) {
        chapterSelect.remove(1);
    }
    
    // اضافه کردن مباحث مربوط به موضوع انتخاب شده
    if (subject && appData.subjectChapters[subject]) {
        appData.subjectChapters[subject].forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
    }
}

// بروزرسانی آمار سوالات
function updateQuestionsStatistics() {
    document.getElementById('totalQuestionsCount').textContent = sampleQuestions.length;
    document.getElementById('easyQuestionsCount').textContent = sampleQuestions.filter(q => q.level === 'easy').length;
    document.getElementById('mediumQuestionsCount').textContent = sampleQuestions.filter(q => q.level === 'medium').length;
    document.getElementById('hardQuestionsCount').textContent = sampleQuestions.filter(q => q.level === 'hard').length;
}

// مدیریت منو در پنل ادمین
document.querySelectorAll('#adminPanel [data-page]').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // حذف کلاس active از همه آیتم‌ها
        document.querySelectorAll('#adminPanel .sidebar-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به آیتم انتخاب شده
        this.classList.add('active');
        
        // مخفی کردن همه صفحات
        document.querySelectorAll('#adminPanel > div > main > div').forEach(div => {
            div.classList.add('hidden');
        });
        
        // نمایش صفحه انتخاب شده
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.remove('hidden');
        
        // به روز رسانی عنوان صفحه
        document.getElementById('adminPageTitle').textContent = this.querySelector('span').textContent;
        
        // بستن منو در حالت موبایل
        if (window.innerWidth < 768) {
            document.querySelector('#adminPanel .sidebar').classList.remove('open');
            document.querySelector('#adminPanel .main-content').classList.remove('sidebar-open');
        }
    });
});

// مدیریت منو در پنل کاربر
document.querySelectorAll('#userPanel [data-page]').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // حذف کلاس active از همه آیتم‌ها
        document.querySelectorAll('#userPanel .sidebar-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به آیتم انتخاب شده
        this.classList.add('active');
        
        // مخفی کردن همه صفحات
        document.querySelectorAll('#userPanel > div > main > div').forEach(div => {
            div.classList.add('hidden');
        });
        
        // نمایش صفحه انتخاب شده
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.remove('hidden');
        
        // به روز رسانی عنوان صفحه
        document.getElementById('userPageTitle').textContent = this.querySelector('span').textContent;
        
        // بستن منو در حالت موبایل
        if (window.innerWidth < 768) {
            document.querySelector('#userPanel .sidebar').classList.remove('open');
            document.querySelector('#userPanel .main-content').classList.remove('sidebar-open');
        }
    });
});

// مدیریت منوی موبایل برای ادمین
document.getElementById('adminMenuToggle').addEventListener('click', function() {
    const sidebar = document.querySelector('#adminPanel .sidebar');
    const mainContent = document.querySelector('#adminPanel .main-content');
    
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('sidebar-open');
});

// مدیریت منوی موبایل برای کاربر
document.getElementById('userMenuToggle').addEventListener('click', function() {
    const sidebar = document.querySelector('#userPanel .sidebar');
    const mainContent = document.querySelector('#userPanel .main-content');
    
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('sidebar-open');
});

// خروج از پنل ادمین
document.getElementById('adminLogout').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('authPage').classList.remove('hidden');
    showNotification('با موفقیت خارج شدید', 'success');
});

// خروج از پنل کاربر
document.getElementById('userLogout').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('userPanel').classList.add('hidden');
    document.getElementById('authPage').classList.remove('hidden');
    showNotification('با موفقیت خارج شدید', 'success');
});

// مدیریت فرم افزودن سوال در پنل کاربر
document.getElementById('addQuestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const level = document.getElementById('questionLevel').value;
    const hasImage = document.getElementById('needImage').checked;
    const institution = document.getElementById('questionInstitution').value;
    
    let baseScore = 0;
    switch(level) {
        case 'easy': baseScore = 15; break;
        case 'medium': baseScore = 30; break;
        case 'hard': baseScore = 50; break;
    }
    
    if (hasImage) {
        baseScore += 10;
    }
    
    const newQuestion = {
        id: Date.now(),
        text: document.getElementById('questionText').value || "سوال نمونه",
        subject: document.getElementById('questionSubject').value,
        chapter: document.getElementById('questionChapter').value,
        institution: institution,
        level: document.getElementById('questionLevel').options[document.getElementById('questionLevel').selectedIndex].text.split(' ')[0],
        score: baseScore,
        status: "pending",
        date: new Date().toLocaleDateString('fa-IR')
    };
    
    appData.userQuestions.push(newQuestion);
    appData.currentUser.questionsCount++;
    
    showNotification('سوال با موفقیت اضافه شد و در انتظار تایید قرار گرفت!', 'success');
    this.reset();
    document.getElementById('imageUploadSection').classList.add('hidden');
    document.getElementById('imagePreview').classList.add('hidden');
    updateUserScore();
    renderUserData();
});

// مدیریت فرم افزودن سوال در پنل ادمین
document.getElementById('adminAddQuestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const level = document.getElementById('adminQuestionLevel').value;
    const hasImage = document.getElementById('adminNeedImage').checked;
    const institution = document.getElementById('adminQuestionInstitution').value;
    
    let baseScore = 0;
    switch(level) {
        case 'easy': baseScore = 15; break;
        case 'medium': baseScore = 30; break;
        case 'hard': baseScore = 50; break;
    }
    
    if (hasImage) {
        baseScore += 10;
    }
    
    const newQuestion = {
        id: Date.now(),
        text: document.getElementById('adminQuestionText').value || "سوال نمونه",
        subject: document.getElementById('adminQuestionSubject').value,
        chapter: document.getElementById('adminQuestionChapter').value,
        institution: institution,
        level: level,
        options: [
            document.getElementById('adminOption1').value,
            document.getElementById('adminOption2').value,
            document.getElementById('adminOption3').value,
            document.getElementById('adminOption4').value
        ],
        correctAnswer: document.getElementById('adminCorrectAnswer').value,
        detailedAnswer: document.getElementById('adminDetailedAnswer').value,
        hasImage: hasImage,
        score: baseScore,
        user: "مدیر سیستم",
        date: new Date().toLocaleDateString('fa-IR'),
        status: "approved"
    };
    
    // اضافه کردن سوال به بانک سوالات
    sampleQuestions.push(newQuestion);
    appData.adminQuestions.unshift(newQuestion);
    
    showNotification('سوال با موفقیت به بانک سوالات اضافه شد!', 'success');
    this.reset();
    document.getElementById('adminImageUploadSection').classList.add('hidden');
    document.getElementById('adminImagePreview').classList.add('hidden');
    updateAdminScore();
    updateQuestionsStatistics();
    renderAdminData();
});

// به روز رسانی امتیاز در پنل کاربر
function updateUserScore() {
    const level = document.getElementById('questionLevel').value;
    const hasImage = document.getElementById('needImage').checked;
    
    let baseScore = 0;
    switch(level) {
        case 'easy': baseScore = 15; break;
        case 'medium': baseScore = 30; break;
        case 'hard': baseScore = 50; break;
    }
    
    if (hasImage) {
        baseScore += 10;
    }
    
    document.getElementById('scoreValue').textContent = baseScore;
}

// به روز رسانی امتیاز در پنل ادمین
function updateAdminScore() {
    const level = document.getElementById('adminQuestionLevel').value;
    const hasImage = document.getElementById('adminNeedImage').checked;
    
    let baseScore = 0;
    switch(level) {
        case 'easy': baseScore = 15; break;
        case 'medium': baseScore = 30; break;
        case 'hard': baseScore = 50; break;
    }
    
    if (hasImage) {
        baseScore += 10;
    }
    
    document.getElementById('adminScoreValue').textContent = baseScore;
}

// مدیریت نمایش/پنهان کردن بخش آپلود تصویر در پنل کاربر
document.getElementById('needImage').addEventListener('change', function() {
    const imageSection = document.getElementById('imageUploadSection');
    if (this.checked) {
        imageSection.classList.remove('hidden');
        updateUserScore();
    } else {
        imageSection.classList.add('hidden');
        document.getElementById('imagePreview').classList.add('hidden');
        updateUserScore();
    }
});

// مدیریت نمایش/پنهان کردن بخش آپلود تصویر در پنل ادمین
document.getElementById('adminNeedImage').addEventListener('change', function() {
    const imageSection = document.getElementById('adminImageUploadSection');
    if (this.checked) {
        imageSection.classList.remove('hidden');
        updateAdminScore();
    } else {
        imageSection.classList.add('hidden');
        document.getElementById('adminImagePreview').classList.add('hidden');
        updateAdminScore();
    }
});

// پیش‌نمایش تصویر آپلود شده در پنل کاربر
document.getElementById('questionImage').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
            document.getElementById('imagePreview').classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// پیش‌نمایش تصویر آپلود شده در پنل ادمین
document.getElementById('adminQuestionImage').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('adminPreview').src = e.target.result;
            document.getElementById('adminImagePreview').classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// تغییر سطح دشواری در پنل کاربر
document.getElementById('questionLevel').addEventListener('change', updateUserScore);

// تغییر سطح دشواری در پنل ادمین
document.getElementById('adminQuestionLevel').addEventListener('change', updateAdminScore);

// رندر داده‌های ادمین
function renderAdminData() {
    // به روزرسانی زمان‌های فعالیت اخیر
    updateRecentActivities();
    
    // رندر کاربران
    renderUsersTable();
    
    // رندر سوالات
    renderQuestionsTable();
    
    // رندر موضوعات
    renderSubjectsList();
}

// به روزرسانی فعالیت‌های اخیر با زمان واقعی
function updateRecentActivities() {
    const now = new Date();
    const timeAgo1 = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 ساعت پیش
    const timeAgo2 = new Date(now.getTime() - 30 * 60 * 1000); // 30 دقیقه پیش
    const timeAgo3 = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 1 روز پیش
    
    document.getElementById('recentActivity1').textContent = formatTimeAgo(timeAgo1);
    document.getElementById('recentActivity2').textContent = formatTimeAgo(timeAgo2);
    document.getElementById('recentActivity3').textContent = formatTimeAgo(timeAgo3);
}

// فرمت زمان گذشته
function formatTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'همین الان';
    if (diffMins < 60) return `${diffMins} دقیقه پیش`;
    if (diffHours < 24) return `${diffHours} ساعت پیش`;
    return `${diffDays} روز پیش`;
}

// رندر جدول کاربران
function renderUsersTable() {
    const usersTable = document.getElementById('adminUsersTable');
    usersTable.innerHTML = '';
    
    // اعمال فیلترها
    const filteredUsers = appData.users.filter(user => {
        const matchesStatus = appData.userFilters.status === 'all' || user.status === appData.userFilters.status;
        const matchesRole = appData.userFilters.role === 'all' || user.role === appData.userFilters.role;
        const matchesSearch = appData.userFilters.search === '' || 
            user.username.includes(appData.userFilters.search) || 
            user.email.includes(appData.userFilters.search);
        
        return matchesStatus && matchesRole && matchesSearch;
    });
    
    if (filteredUsers.length === 0) {
        usersTable.innerHTML = `
            <tr>
                <td colspan="6" class="px-6 py-4 text-center text-blue-500">
                    <i class="fas fa-search text-4xl mb-2 block"></i>
                    <p>هیچ کاربری با فیلترهای انتخاب شده یافت نشد</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredUsers.forEach(user => {
        const statusText = user.status === 'active' ? 'فعال' : 
                         user.status === 'inactive' ? 'غیرفعال' : 'مسدود شده';
        const statusClass = user.status === 'active' ? 'bg-green-100 text-green-800' : 
                          user.status === 'inactive' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
        
        const roleText = user.role === 'admin' ? 'مدیر' : 
                       user.role === 'moderator' ? 'ناظر' : 'کاربر عادی';
        
        const row = document.createElement('tr');
        row.className = 'hover:bg-blue-50 transition-colors';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${user.username}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${user.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${user.joinDate}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">${statusText}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${roleText}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 ml-4 edit-user" data-id="${user.id}"><i class="fas fa-edit"></i></button>
                <button class="text-red-600 hover:text-red-900 ban-user" data-id="${user.id}"><i class="fas fa-ban"></i></button>
                <button class="text-red-600 hover:text-red-900 delete-user" data-id="${user.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        usersTable.appendChild(row);
    });
    
    // اضافه کردن event listener برای دکمه‌های کاربران
    document.querySelectorAll('.edit-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            openUserManagementModal(userId);
        });
    });
    
    document.querySelectorAll('.ban-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            toggleUserBan(userId);
        });
    });
    
    document.querySelectorAll('.delete-user').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            deleteUser(userId);
        });
    });
}

// رندر جدول سوالات
function renderQuestionsTable() {
    const questionsTable = document.getElementById('adminQuestionsTable');
    questionsTable.innerHTML = '';
    
    // اعمال فیلترها
    const filteredQuestions = appData.adminQuestions.filter(question => {
        const matchesSubject = appData.questionFilters.subject === 'all' || question.subject === appData.questionFilters.subject;
        const matchesStatus = appData.questionFilters.status === 'all' || question.status === appData.questionFilters.status;
        const matchesSearch = appData.questionFilters.search === '' || 
            question.text.includes(appData.questionFilters.search) || 
            question.user.includes(appData.questionFilters.search);
        
        return matchesSubject && matchesStatus && matchesSearch;
    });
    
    if (filteredQuestions.length === 0) {
        questionsTable.innerHTML = `
            <tr>
                <td colspan="6" class="px-6 py-4 text-center text-blue-500">
                    <i class="fas fa-search text-4xl mb-2 block"></i>
                    <p>هیچ سوالی با فیلترهای انتخاب شده یافت نشد</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredQuestions.forEach(question => {
        const statusText = question.status === 'approved' ? 'تایید شده' : question.status === 'pending' ? 'در انتظار' : 'رد شده';
        const statusClass = question.status === 'approved' ? 'bg-green-100 text-green-800' : 
                          question.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
        
        const row = document.createElement('tr');
        row.className = 'hover:bg-blue-50 transition-colors';
        
        if (appData.questionFilters.displayMode === 'full') {
            // حالت نمایش کامل
            row.innerHTML = `
                <td class="px-6 py-4 text-sm text-blue-900">
                    <div class="font-semibold mb-2">${question.text}</div>
                    ${question.detailedAnswer ? `<div class="text-xs text-gray-600 mt-2"><strong>پاسخ تشریحی:</strong> ${question.detailedAnswer}</div>` : ''}
                    ${question.options ? `
                        <div class="mt-2">
                            <strong class="text-xs">گزینه‌ها:</strong>
                            <div class="text-xs text-gray-600 mt-1">
                                ${question.options.map((opt, idx) => `<div>${['الف', 'ب', 'ج', 'د'][idx]}: ${opt}</div>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.user}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.subject}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.date}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">${statusText}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-blue-600 hover:text-blue-900 ml-4 edit-question" data-id="${question.id}"><i class="fas fa-edit"></i></button>
                    <button class="text-red-600 hover:text-red-900 delete-question" data-id="${question.id}"><i class="fas fa-trash"></i></button>
                    ${question.status === 'pending' ? 
                      `<button class="text-green-600 hover:text-green-900 approve-question" data-id="${question.id}"><i class="fas fa-check"></i></button>
                       <button class="text-red-600 hover:text-red-900 reject-question" data-id="${question.id}"><i class="fas fa-times"></i></button>` : ''}
                </td>
            `;
        } else {
            // حالت نمایش فشرده (پیش‌فرض)
            row.innerHTML = `
                <td class="px-6 py-4 text-sm text-blue-900">${question.text}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.user}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.subject}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.date}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">${statusText}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-blue-600 hover:text-blue-900 ml-4 edit-question" data-id="${question.id}"><i class="fas fa-edit"></i></button>
                    <button class="text-red-600 hover:text-red-900 delete-question" data-id="${question.id}"><i class="fas fa-trash"></i></button>
                    ${question.status === 'pending' ? 
                      `<button class="text-green-600 hover:text-green-900 approve-question" data-id="${question.id}"><i class="fas fa-check"></i></button>
                       <button class="text-red-600 hover:text-red-900 reject-question" data-id="${question.id}"><i class="fas fa-times"></i></button>` : ''}
                </td>
            `;
        }
        
        questionsTable.appendChild(row);
    });
    
    // اضافه کردن event listener برای دکمه‌های سوالات
    document.querySelectorAll('.edit-question').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-id'));
            openEditQuestionModal(questionId);
        });
    });
    
    document.querySelectorAll('.delete-question').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-id'));
            deleteQuestion(questionId);
        });
    });
    
    document.querySelectorAll('.approve-question').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-id'));
            updateQuestionStatus(questionId, 'approved');
        });
    });
    
    document.querySelectorAll('.reject-question').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-id'));
            updateQuestionStatus(questionId, 'rejected');
        });
    });
}

// رندر لیست موضوعات
function renderSubjectsList() {
    const subjectsList = document.getElementById('subjectsList');
    subjectsList.innerHTML = '';
    
    appData.subjects.forEach(subject => {
        const subjectElement = document.createElement('div');
        subjectElement.className = 'flex justify-between items-center';
        subjectElement.innerHTML = `
            <span class="text-blue-700">${subject}</span>
            <div>
                <button class="text-blue-600 hover:text-blue-900 ml-2 edit-subject" data-subject="${subject}"><i class="fas fa-edit"></i></button>
                <button class="text-red-600 hover:text-red-900 delete-subject" data-subject="${subject}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        subjectsList.appendChild(subjectElement);
    });
    
    // اضافه کردن event listener برای دکمه‌های موضوعات
    document.querySelectorAll('.edit-subject').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            editSubject(subject);
        });
    });
    
    document.querySelectorAll('.delete-subject').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            deleteSubject(subject);
        });
    });
}

// رندر داده‌های کاربر
function renderUserData() {
    // به روز رسانی آمار کاربر
    document.getElementById('userQuestionsCount').textContent = appData.currentUser.questionsCount;
    document.getElementById('userApprovedCount').textContent = appData.currentUser.approvedCount;
    document.getElementById('userTotalScore').textContent = appData.currentUser.totalScore;
    document.getElementById('monthlyScoreValue').textContent = appData.currentUser.monthlyScore;
    
    // محاسبه پیشرفت ماهانه
    const progressPercent = Math.min(100, (appData.currentUser.monthlyScore / 1000) * 100);
    document.getElementById('monthlyProgress').style.width = `${progressPercent}%`;
    
    // رندر سوالات کاربر
    const userQuestionsTable = document.getElementById('userQuestionsTable');
    userQuestionsTable.innerHTML = '';
    
    if (appData.userQuestions.length === 0) {
        userQuestionsTable.innerHTML = `
            <tr>
                <td colspan="7" class="px-6 py-4 text-center text-blue-500">
                    <i class="fas fa-inbox text-4xl mb-2 block"></i>
                    <p>هنوز سوالی ارسال نکرده‌اید</p>
                    <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 btn-hover" onclick="switchToPage('addQuestion')">
                        اولین سوال خود را ارسال کنید
                    </button>
                </td>
            </tr>
        `;
    } else {
        appData.userQuestions.forEach(question => {
            const statusText = question.status === 'approved' ? 'تایید شده' : question.status === 'pending' ? 'در انتظار' : 'رد شده';
            const statusClass = question.status === 'approved' ? 'bg-green-100 text-green-800' : 
                              question.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
            
            const row = document.createElement('tr');
            row.className = 'hover:bg-blue-50 transition-colors';
            row.innerHTML = `
                <td class="px-6 py-4 text-sm text-blue-900">${question.text}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.subject}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.chapter}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.level}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${question.score}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">${statusText}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-blue-600 hover:text-blue-900 ml-4 edit-user-question" data-id="${question.id}"><i class="fas fa-edit"></i></button>
                    <button class="text-red-600 hover:text-red-900 delete-user-question" data-id="${question.id}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            userQuestionsTable.appendChild(row);
        });
        
        // اضافه کردن event listener برای دکمه‌های سوالات کاربر
        document.querySelectorAll('.edit-user-question').forEach(button => {
            button.addEventListener('click', function() {
                const questionId = parseInt(this.getAttribute('data-id'));
                openEditQuestionModal(questionId, true);
            });
        });
        
        document.querySelectorAll('.delete-user-question').forEach(button => {
            button.addEventListener('click', function() {
                const questionId = parseInt(this.getAttribute('data-id'));
                deleteUserQuestion(questionId);
            });
        });
    }
    
    // رندر امتیازات کاربر
    const userScoresTable = document.getElementById('userScoresTable');
    userScoresTable.innerHTML = '';
    
    if (appData.userScores.length === 0) {
        userScoresTable.innerHTML = `
            <tr>
                <td colspan="4" class="px-6 py-4 text-center text-blue-500">
                    <i class="fas fa-chart-line text-4xl mb-2 block"></i>
                    <p>هنوز امتیازی کسب نکرده‌اید</p>
                    <p class="text-sm mt-2">با ارسال سوالات باکیفیت امتیاز کسب کنید</p>
                </td>
            </tr>
        `;
    } else {
        appData.userScores.forEach(score => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-blue-50 transition-colors';
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${score.date}</td>
                <td class="px-6 py-4 text-sm text-blue-900">${score.question}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${score.points}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">تایید شده</span>
                </td>
            `;
            userScoresTable.appendChild(row);
        });
    }
}

// ==================== تغییرات جدید ====================

// رندر لیست موضوعات در تنظیمات سیستم
function renderTopicsList() {
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = '';
    
    appData.topics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'flex justify-between items-center p-4 border-b border-gray-200';
        topicElement.innerHTML = `
            <div>
                <h4 class="font-semibold text-blue-900">${topic.name}</h4>
                <p class="text-sm text-gray-600">${topic.description}</p>
            </div>
            <div>
                <button class="text-blue-600 hover:text-blue-900 ml-2 edit-topic" data-id="${topic.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-600 hover:text-red-900 delete-topic" data-id="${topic.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        topicsList.appendChild(topicElement);
    });
    
    // اضافه کردن event listener برای دکمه‌های موضوعات
    document.querySelectorAll('.edit-topic').forEach(button => {
        button.addEventListener('click', function() {
            const topicId = parseInt(this.getAttribute('data-id'));
            openEditTopicModal(topicId);
        });
    });
    
    document.querySelectorAll('.delete-topic').forEach(button => {
        button.addEventListener('click', function() {
            const topicId = parseInt(this.getAttribute('data-id'));
            deleteTopic(topicId);
        });
    });
}

// رندر مدیریت مباحث درسی
function renderSubjectsManagement() {
    const subjectsManagement = document.getElementById('subjectsManagement');
    subjectsManagement.innerHTML = '';
    
    Object.keys(appData.subjectChapters).forEach(subject => {
        const subjectElement = document.createElement('div');
        subjectElement.className = 'mb-6 p-4 border border-gray-200 rounded-lg';
        subjectElement.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h4 class="font-semibold text-blue-900 text-lg">${subject}</h4>
                <div>
                    <button class="text-blue-600 hover:text-blue-900 ml-2 add-chapter" data-subject="${subject}">
                        <i class="fas fa-plus"></i> افزودن مبحث
                    </button>
                    <button class="text-red-600 hover:text-red-900 delete-subject-management" data-subject="${subject}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="chapters-list">
                ${appData.subjectChapters[subject].map(chapter => `
                    <div class="flex justify-between items-center py-2 px-3 bg-gray-50 rounded mb-2">
                        <span class="text-blue-700">${chapter}</span>
                        <div>
                            <button class="text-blue-600 hover:text-blue-900 ml-2 edit-chapter" data-subject="${subject}" data-chapter="${chapter}">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="text-red-600 hover:text-red-900 delete-chapter" data-subject="${subject}" data-chapter="${chapter}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        subjectsManagement.appendChild(subjectElement);
    });
    
    // اضافه کردن event listener برای دکمه‌ها
    document.querySelectorAll('.add-chapter').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            openAddChapterModal(subject);
        });
    });
    
    document.querySelectorAll('.edit-chapter').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            const chapter = this.getAttribute('data-chapter');
            openEditChapterModal(subject, chapter);
        });
    });
    
    document.querySelectorAll('.delete-chapter').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            const chapter = this.getAttribute('data-chapter');
            deleteChapter(subject, chapter);
        });
    });
    
    document.querySelectorAll('.delete-subject-management').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            deleteSubject(subject);
        });
    });
}

// باز کردن مودال افزودن موضوع
function openAddTopicModal() {
    document.getElementById('addTopicModal').classList.add('open');
}

// بستن مودال افزودن موضوع
function closeAddTopicModal() {
    document.getElementById('addTopicModal').classList.remove('open');
    document.getElementById('addTopicForm').reset();
}

// مدیریت فرم افزودن موضوع
document.getElementById('addTopicForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const topicName = document.getElementById('topicName').value;
    const topicDescription = document.getElementById('topicDescription').value;
    
    const newTopic = {
        id: Date.now(),
        name: topicName,
        description: topicDescription
    };
    
    appData.topics.push(newTopic);
    showNotification('موضوع با موفقیت اضافه شد', 'success');
    closeAddTopicModal();
    renderTopicsList();
});

// باز کردن مودال ویرایش موضوع
function openEditTopicModal(topicId) {
    const topic = appData.topics.find(t => t.id === topicId);
    if (topic) {
        document.getElementById('editTopicId').value = topic.id;
        document.getElementById('editTopicName').value = topic.name;
        document.getElementById('editTopicDescription').value = topic.description;
        document.getElementById('editTopicModal').classList.add('open');
    }
}

// بستن مودال ویرایش موضوع
function closeEditTopicModal() {
    document.getElementById('editTopicModal').classList.remove('open');
}

// مدیریت فرم ویرایش موضوع
document.getElementById('editTopicForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const topicId = parseInt(document.getElementById('editTopicId').value);
    const topicName = document.getElementById('editTopicName').value;
    const topicDescription = document.getElementById('editTopicDescription').value;
    
    const topic = appData.topics.find(t => t.id === topicId);
    if (topic) {
        topic.name = topicName;
        topic.description = topicDescription;
        showNotification('موضوع با موفقیت ویرایش شد', 'success');
        closeEditTopicModal();
        renderTopicsList();
    }
});

// حذف موضوع
function deleteTopic(topicId) {
    if (confirm('آیا از حذف این موضوع اطمینان دارید؟')) {
        appData.topics = appData.topics.filter(t => t.id !== topicId);
        showNotification('موضوع با موفقیت حذف شد', 'success');
        renderTopicsList();
    }
}

// باز کردن مودال افزودن مبحث
function openAddChapterModal(subject) {
    document.getElementById('addChapterSubject').value = subject;
    document.getElementById('addChapterModal').classList.add('open');
}

// بستن مودال افزودن مبحث
function closeAddChapterModal() {
    document.getElementById('addChapterModal').classList.remove('open');
    document.getElementById('addChapterForm').reset();
}

// مدیریت فرم افزودن مبحث
document.getElementById('addChapterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subject = document.getElementById('addChapterSubject').value;
    const chapterName = document.getElementById('chapterName').value;
    
    if (!appData.subjectChapters[subject]) {
        appData.subjectChapters[subject] = [];
    }
    
    appData.subjectChapters[subject].push(chapterName);
    showNotification('مبحث با موفقیت اضافه شد', 'success');
    closeAddChapterModal();
    renderSubjectsManagement();
    initializeChapterDropdowns(); // بروزرسانی dropdownها
});

// باز کردن مودال ویرایش مبحث
function openEditChapterModal(subject, chapter) {
    document.getElementById('editChapterSubject').value = subject;
    document.getElementById('editOldChapterName').value = chapter;
    document.getElementById('editChapterName').value = chapter;
    document.getElementById('editChapterModal').classList.add('open');
}

// بستن مودال ویرایش مبحث
function closeEditChapterModal() {
    document.getElementById('editChapterModal').classList.remove('open');
}

// مدیریت فرم ویرایش مبحث
document.getElementById('editChapterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subject = document.getElementById('editChapterSubject').value;
    const oldChapterName = document.getElementById('editOldChapterName').value;
    const newChapterName = document.getElementById('editChapterName').value;
    
    const chapterIndex = appData.subjectChapters[subject].indexOf(oldChapterName);
    if (chapterIndex !== -1) {
        appData.subjectChapters[subject][chapterIndex] = newChapterName;
        
        // به‌روزرسانی سوالات مربوطه
        updateQuestionsChapter(subject, oldChapterName, newChapterName);
        
        showNotification('مبحث با موفقیت ویرایش شد', 'success');
        closeEditChapterModal();
        renderSubjectsManagement();
        initializeChapterDropdowns(); // بروزرسانی dropdownها
    }
});

// به‌روزرسانی مبحث در سوالات
function updateQuestionsChapter(subject, oldChapter, newChapter) {
    sampleQuestions.forEach(q => {
        if (q.subject === subject && q.chapter === oldChapter) {
            q.chapter = newChapter;
        }
    });
    
    appData.userQuestions.forEach(q => {
        if (q.subject === subject && q.chapter === oldChapter) {
            q.chapter = newChapter;
        }
    });
    
    appData.adminQuestions.forEach(q => {
        if (q.subject === subject && q.chapter === oldChapter) {
            q.chapter = newChapter;
        }
    });
}

// حذف مبحث
function deleteChapter(subject, chapter) {
    if (confirm(`آیا از حذف مبحث "${chapter}" اطمینان دارید؟`)) {
        appData.subjectChapters[subject] = appData.subjectChapters[subject].filter(c => c !== chapter);
        showNotification('مبحث با موفقیت حذف شد', 'success');
        renderSubjectsManagement();
        initializeChapterDropdowns(); // بروزرسانی dropdownها
    }
}

// مدیریت افزودن کاربر جدید
document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('newUserName').value;
    const email = document.getElementById('newUserEmail').value;
    const password = document.getElementById('newUserPassword').value;
    const role = document.getElementById('newUserRole').value;
    
    const newUser = {
        id: Date.now(),
        username: username,
        email: email,
        password: password,
        joinDate: new Date().toLocaleDateString('fa-IR'),
        status: 'active',
        role: role
    };
    
    appData.users.push(newUser);
    showNotification('کاربر جدید با موفقیت اضافه شد', 'success');
    document.getElementById('addUserForm').reset();
    document.getElementById('addUserModal').classList.remove('open');
    renderAdminData();
});

// باز کردن مودال افزودن کاربر
function openAddUserModal() {
    document.getElementById('addUserModal').classList.add('open');
}

// بستن مودال افزودن کاربر
function closeAddUserModal() {
    document.getElementById('addUserModal').classList.remove('open');
    document.getElementById('addUserForm').reset();
}

// اعمال فیلترهای کاربران
function applyUserFilters() {
    const status = document.getElementById('userStatusFilter').value;
    const role = document.getElementById('userRoleFilter').value;
    const search = document.getElementById('userSearchFilter').value;
    
    appData.userFilters.status = status;
    appData.userFilters.role = role;
    appData.userFilters.search = search;
    
    renderUsersTable();
}

// اعمال فیلترهای سوالات
function applyQuestionFilters() {
    const subject = document.getElementById('questionSubjectFilter').value;
    const status = document.getElementById('questionStatusFilter').value;
    const search = document.getElementById('questionSearchFilter').value;
    const displayMode = document.getElementById('questionDisplayMode').value;
    
    appData.questionFilters.subject = subject;
    appData.questionFilters.status = status;
    appData.questionFilters.search = search;
    appData.questionFilters.displayMode = displayMode;
    
    renderQuestionsTable();
}

// تغییر حالت نمایش سوالات
function toggleQuestionDisplayMode() {
    const displayMode = document.getElementById('questionDisplayMode').value;
    appData.questionFilters.displayMode = displayMode;
    renderQuestionsTable();
}

// ==================== event listenerهای جدید ====================

// event listener برای دکمه‌های تنظیمات سیستم
document.getElementById('addTopicBtn').addEventListener('click', openAddTopicModal);
document.getElementById('closeAddTopicModal').addEventListener('click', closeAddTopicModal);
document.getElementById('closeEditTopicModal').addEventListener('click', closeEditTopicModal);
document.getElementById('closeAddChapterModal').addEventListener('click', closeAddChapterModal);
document.getElementById('closeEditChapterModal').addEventListener('click', closeEditChapterModal);

// event listener برای مدیریت کاربران
document.getElementById('addUserBtn').addEventListener('click', openAddUserModal);
document.getElementById('closeAddUserModal').addEventListener('click', closeAddUserModal);

// event listener برای فیلترها
document.getElementById('userStatusFilter').addEventListener('change', applyUserFilters);
document.getElementById('userRoleFilter').addEventListener('change', applyUserFilters);
document.getElementById('userSearchFilter').addEventListener('input', applyUserFilters);
document.getElementById('questionSubjectFilter').addEventListener('change', applyQuestionFilters);
document.getElementById('questionStatusFilter').addEventListener('change', applyQuestionFilters);
document.getElementById('questionSearchFilter').addEventListener('input', applyQuestionFilters);
document.getElementById('questionDisplayMode').addEventListener('change', toggleQuestionDisplayMode);

// تابع کمکی برای تغییر صفحه در پنل کاربر
function switchToPage(pageId) {
    document.querySelectorAll('#userPanel .sidebar-item').forEach(i => {
        i.classList.remove('active');
    });
    
    document.querySelector(`#userPanel [data-page="${pageId}"]`).classList.add('active');
    
    document.querySelectorAll('#userPanel > div > main > div').forEach(div => {
        div.classList.add('hidden');
    });
    
    document.getElementById(pageId).classList.remove('hidden');
    
    document.getElementById('userPageTitle').textContent = 
        document.querySelector(`#userPanel [data-page="${pageId}"] span`).textContent;
}

// باز کردن مودال ویرایش سوال
function openEditQuestionModal(questionId, isUserQuestion = false) {
    const questions = isUserQuestion ? appData.userQuestions : sampleQuestions;
    const question = questions.find(q => q.id === questionId);
    
    if (question) {
        document.getElementById('editQuestionId').value = question.id;
        document.getElementById('editQuestionSubject').value = question.subject;
        document.getElementById('editQuestionChapter').value = question.chapter;
        document.getElementById('editQuestionInstitution').value = question.institution || 'سایر';
        document.getElementById('editQuestionLevel').value = question.level;
        document.getElementById('editQuestionText').value = question.text;
        document.getElementById('editOption1').value = question.options ? question.options[0] : '';
        document.getElementById('editOption2').value = question.options ? question.options[1] : '';
        document.getElementById('editOption3').value = question.options ? question.options[2] : '';
        document.getElementById('editOption4').value = question.options ? question.options[3] : '';
        document.getElementById('editCorrectAnswer').value = question.correctAnswer || '1';
        document.getElementById('editDetailedAnswer').value = question.detailedAnswer || '';
        document.getElementById('editNeedImage').checked = question.hasImage || false;
        document.getElementById('editScoreValue').textContent = question.score || 15;
        
        // بروزرسانی مباحث بر اساس موضوع انتخاب شده
        updateChapterOptions(question.subject, 'editQuestionChapter');
        
        document.getElementById('editQuestionModal').classList.add('open');
    }
}

// بستن مودال ویرایش سوال
document.getElementById('closeEditModal').addEventListener('click', function() {
    document.getElementById('editQuestionModal').classList.remove('open');
});

document.getElementById('cancelEdit').addEventListener('click', function() {
    document.getElementById('editQuestionModal').classList.remove('open');
});

// مدیریت فرم ویرایش سوال
document.getElementById('editQuestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const questionId = parseInt(document.getElementById('editQuestionId').value);
    const subject = document.getElementById('editQuestionSubject').value;
    const chapter = document.getElementById('editQuestionChapter').value;
    const institution = document.getElementById('editQuestionInstitution').value;
    const text = document.getElementById('editQuestionText').value;
    const level = document.getElementById('editQuestionLevel').value;
    const options = [
        document.getElementById('editOption1').value,
        document.getElementById('editOption2').value,
        document.getElementById('editOption3').value,
        document.getElementById('editOption4').value
    ];
    const correctAnswer = document.getElementById('editCorrectAnswer').value;
    const detailedAnswer = document.getElementById('editDetailedAnswer').value;
    const hasImage = document.getElementById('editNeedImage').checked;
    
    // پیدا کردن سوال در هر دو لیست و به روز رسانی آن
    let question = appData.userQuestions.find(q => q.id === questionId);
    if (question) {
        question.subject = subject;
        question.chapter = chapter;
        question.institution = institution;
        question.text = text;
        question.level = level;
        question.options = options;
        question.correctAnswer = correctAnswer;
        question.detailedAnswer = detailedAnswer;
        question.hasImage = hasImage;
    }
    
    question = sampleQuestions.find(q => q.id === questionId);
    if (question) {
        question.subject = subject;
        question.chapter = chapter;
        question.institution = institution;
        question.text = text;
        question.level = level;
        question.options = options;
        question.correctAnswer = correctAnswer;
        question.detailedAnswer = detailedAnswer;
        question.hasImage = hasImage;
    }
    
    // به‌روزرسانی سوال در لیست adminQuestions
    const adminQuestion = appData.adminQuestions.find(q => q.id === questionId);
    if (adminQuestion) {
        adminQuestion.subject = subject;
        adminQuestion.text = text;
    }
    
    showNotification('سوال با موفقیت ویرایش شد', 'success');
    document.getElementById('editQuestionModal').classList.remove('open');
    
    // به روز رسانی نمایش
    renderAdminData();
    renderUserData();
    updateQuestionsStatistics();
});

// حذف سوال
function deleteQuestion(questionId) {
    if (confirm('آیا از حذف این سوال اطمینان دارید؟')) {
        appData.adminQuestions = appData.adminQuestions.filter(q => q.id !== questionId);
        sampleQuestions = sampleQuestions.filter(q => q.id !== questionId);
        showNotification('سوال با موفقیت حذف شد', 'success');
        renderAdminData();
        updateQuestionsStatistics();
    }
}

// حذف سوال کاربر
function deleteUserQuestion(questionId) {
    if (confirm('آیا از حذف این سوال اطمینان دارید؟')) {
        appData.userQuestions = appData.userQuestions.filter(q => q.id !== questionId);
        appData.currentUser.questionsCount--;
        showNotification('سوال با موفقیت حذف شد', 'success');
        renderUserData();
    }
}

// به روز رسانی وضعیت سوال
function updateQuestionStatus(questionId, status) {
    const question = appData.adminQuestions.find(q => q.id === questionId);
    if (question) {
        question.status = status;
        showNotification(`وضعیت سوال به ${status === 'approved' ? 'تایید شده' : 'رد شده'} تغییر کرد`, 'success');
        renderAdminData();
        
        // اگر سوال تایید شد، به امتیازات کاربر اضافه شود
        if (status === 'approved') {
            // در اینجا باید کاربر مربوطه پیدا شود و امتیاز به او اضافه گردد
            // برای سادگی، فقط یک پیام نمایش می‌دهیم
            showNotification('امتیاز سوال به کاربر مربوطه اضافه شد', 'success');
        }
    }
}

// مدیریت مودال ساخت آزمون
document.getElementById('openExamModal').addEventListener('click', function() {
    document.getElementById('createExamModal').classList.add('open');
    updateAvailableQuestionsCount();
});

// بستن مودال‌ها
document.getElementById('closeExamModal').addEventListener('click', function() {
    document.getElementById('createExamModal').classList.remove('open');
    document.getElementById('examPreview').classList.add('hidden');
});

// بروزرسانی تعداد سوالات موجود
function updateAvailableQuestionsCount() {
    const subject = document.getElementById('examSubject').value;
    const chapter = document.getElementById('examChapter').value;
    const level = document.getElementById('examLevel').value;

    const filteredQuestions = sampleQuestions.filter(q => {
        return (!subject || q.subject === subject) &&
               (!chapter || q.chapter === chapter) &&
               (!level || q.level === level);
    });

    document.getElementById('availableQuestions').textContent = 
        `${filteredQuestions.length} سوال پیدا شد`;
}

// پیش‌نمایش آزمون
document.getElementById('previewExam').addEventListener('click', function() {
    const subject = document.getElementById('examSubject').value;
    const chapter = document.getElementById('examChapter').value;
    const level = document.getElementById('examLevel').value;
    const count = parseInt(document.getElementById('examQuestionCount').value);
    const title = document.getElementById('examTitle').value || "آزمون نمونه";
    const time = document.getElementById('examTime').value;

    // فیلتر کردن سوالات
    let filteredQuestions = sampleQuestions.filter(q => {
        return (!subject || q.subject === subject) &&
               (!chapter || q.chapter === chapter) &&
               (!level || q.level === level);
    });

    // انتخاب سوالات به صورت تصادفی
    filteredQuestions = shuffleArray(filteredQuestions).slice(0, count);

    // تولید پیش‌نمایش
    generateExamPreview(filteredQuestions, title, time);
    document.getElementById('examPreview').classList.remove('hidden');
});

// تابع برای تصادفی کردن آرایه
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// تولید پیش‌نمایش آزمون
function generateExamPreview(questions, title, time) {
    const previewContent = document.getElementById('previewContent');
    
    // تابع تبدیل اعداد به فارسی
    const toPersianNumbers = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
    };

    const persianTime = toPersianNumbers(time);
    const persianQuestionCount = toPersianNumbers(questions.length);
    const persianDate = new Date().toLocaleDateString('fa-IR');

    let html = `
        <div class="exam-header bg-blue-50 p-6 rounded-lg mb-6" style="border-bottom: 2px dashed #2563eb;">
            <div style="position:relative;">
                <div style="position:absolute; left:0; top:0; font-family:'Mostaqbal', Tahoma; font-weight:bold; font-size:28px; color:#2563eb;">
                    Sampa
                </div>
                <div style="text-align:center;">
                    <h2 style="margin:0; font-size:18px; padding-top:2px;">${title}</h2>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-size:12px; color:#374151;">
                <div style="text-align:right;">زمان آزمون: ${persianTime} دقیقه</div>
                <div style="text-align:center;">تعداد سوالات: ${persianQuestionCount}</div>
                <div style="text-align:left;">تاریخ آزمون: ${persianDate}</div>
            </div>
        </div>
        <div class="space-y-6">
    `;

    questions.forEach((question, index) => {
        // تابع اصلاح ریاضی برای نمایش صحیح فرمول‌ها
        const fixMath = (text) => {
            if (!text) return "";
            return text.replace(
                /([0-9π√xX÷\+\-\=\^\(\)]+)/g,
                '<span dir="ltr" style="display:inline-block;">$1</span>'
            );
        };

        html += `
            <div class="question-item bg-white p-6 rounded-lg border border-blue-200 shadow-sm" style="border-bottom: 1px solid #d1d5db; margin-bottom: 16px;">
                <div class="flex items-start mb-4">
                    <span class="question-number bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ml-3 flex-shrink-0">${toPersianNumbers(index + 1)}</span>
                    <div class="flex-1">
                        <p class="text-justify text-blue-900 leading-7 mb-2" style="margin: 4px 0; font-size: 16px;">${fixMath(question.text)}</p>
                        ${question.institution ? `<p class="text-sm text-blue-600" style="font-size: 12px; color: #6b7280; margin-top: 8px; font-style: italic; text-align: left; padding-right: 10px;"><strong>${question.institution}</strong></p>` : ''}
                    </div>
                </div>
        `;

        if (question.options && question.options.length > 0) {
            html += `<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; font-size: 14px; margin-right: 10px;">`;
            
            question.options.forEach((option, optIndex) => {
                const optionChar = ["الف", "ب", "ج", "د"][optIndex] || String.fromCharCode(1570 + optIndex);
                html += `
                    <div style="text-align: right; flex: ${option.length < 25 ? 'calc(25% - 8px)' : '100%'}; padding: 4px 0; display: flex; align-items: flex-start;">
                        <div style="
                            width: 24px;
                            height: 24px;
                            border: 1.5px solid #2563eb;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            font-weight: bold;
                            color: #2563eb;
                            margin-left: 6px;
                            flex-shrink: 0;
                        ">${optionChar}</div>
                        <div style="flex:1;">${fixMath(option)}</div>
                    </div>
                `;
            });
            
            html += `</div>`;
        } else {
            html += `
                <div class="col-span-2 text-center text-blue-500 py-4">
                    <i class="fas fa-info-circle text-xl mb-2 block"></i>
                    <p>این سوال گزینه‌ای ندارد</p>
                </div>
            `;
        }

        html += `</div>`;
    });

    html += `
        </div>
        <div style="width: 100%; text-align: center; font-size: 10px; color: #2563eb; border-top: 2px dashed #2563eb; padding-top: 5px; margin-top: 10px;">
            Sampa.ir | @Sampa_org | instagram.com/Sampa_org
        </div>
    `;
    
    previewContent.innerHTML = html;
    
    // ذخیره سوالات برای استفاده در PDF
    currentExamQuestions = questions;
    currentExamTitle = title;
    currentExamTime = time;
}

// تابع یکپارچه برای تولید PDF
function generatePDF() {
    if (!currentExamQuestions || currentExamQuestions.length === 0) {
        showNotification('لطفاً ابتدا آزمون را پیش‌نمایش کنید', 'error');
        return;
    }

    try {
        const title = currentExamTitle || "آزمون نمونه";
        const time = currentExamTime || "-";
        const questions = currentExamQuestions;

        const previewContent = document.getElementById("previewContent");
        previewContent.innerHTML = "";

        const mainBox = document.createElement("div");
        Object.assign(mainBox.style, {
            width: "210mm",
            minHeight: "297mm",
            margin: "0 auto",
            backgroundColor: "white",
            boxSizing: "border-box",
            fontFamily: "B Nazanin, Vazirmatn, Tahoma, sans-serif",
            direction: "rtl",
            textAlign: "right",
            color: "#111827",
            padding: "10mm 20mm 20mm 20mm",
            position: "relative",
            lineHeight: "1.8",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        });

        // هدر
        const headerBox = document.createElement("div");
        Object.assign(headerBox.style, {
            width: "100%",
            padding: "2px 0 8px 0",
            borderBottom: "2px dashed #2563eb",
            marginBottom: "5px",
            position: "relative",
        });

        // تابع تبدیل اعداد به فارسی
        const toPersianNumbers = (num) => {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
        };

        const persianTime = toPersianNumbers(time);
        const persianQuestionCount = toPersianNumbers(questions.length);
        const persianDate = new Date().toLocaleDateString('fa-IR');

        headerBox.innerHTML = `
            <div style="position:absolute; left:0; top:0;
                        font-family:'Mostaqbal', Tahoma, sans-serif;
                        font-weight:bold; font-size:28px; color:#2563eb;">
                Sampa
            </div>
            <div style="text-align:center;">
                <h2 style="margin:0; font-size:18px; padding-top:2px;">${title}</h2>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; font-size:12px; color:#374151;">
                <div style="text-align:right;"> زمان آزمون  ${persianTime} دقیقه</div>
                <div style="text-align:center;">  تعداد سوالات ${persianQuestionCount}</div>
                <div style="text-align:left;">  تاریخ آزمون ${persianDate}</div>
            </div>
        `;
        mainBox.appendChild(headerBox);

        // تابع اصلاح ریاضی
        const fixMath = (text) => {
            if (!text) return "";
            return text.replace(
                /([0-9π√xX÷\+\-\=\^\(\)]+)/g,
                '<span dir="ltr" style="display:inline-block;">$1</span>'
            );
        };

        // سوالات
        const questionContainer = document.createElement("div");
        Object.assign(questionContainer.style, { padding: "0 5mm", flex: "1" });

        questions.forEach((q, i) => {
            const qBox = document.createElement("div");
            Object.assign(qBox.style, {
                marginBottom: "16px",
                padding: "10px 0",
                borderBottom: "1px solid #d1d5db",
            });

            const qText = document.createElement("p");
            qText.innerHTML = `<strong>${toPersianNumbers(i + 1)}</strong> ${fixMath(q.text)}`;
            Object.assign(qText.style, { margin: "4px 0", fontSize: "16px" });
            qBox.appendChild(qText);

            if (Array.isArray(q.options)) {
                const optionsDiv = document.createElement("div");
                Object.assign(optionsDiv.style, {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "8px",
                    fontSize: "14px",
                    marginRight: "10px",
                });

                q.options.forEach((opt, idx) => {
                    const optChar = ["الف", "ب", "ج", "د"][idx] || String.fromCharCode(1570 + idx);
                    const span = document.createElement("div");
                    span.style.textAlign = "right";
                    span.style.flex = opt.length < 25 ? "calc(25% - 8px)" : "100%";
                    span.style.padding = "4px 0";
                    span.style.display = "flex";
                    span.style.alignItems = "flex-start";
                    span.innerHTML = `
                        <div style="
                            width: 24px;
                            height: 24px;
                            border: 1.5px solid #2563eb;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            font-weight: bold;
                            color: #2563eb;
                            margin-left: 6px;
                            flex-shrink: 0;
                        ">${optChar}</div>
                        <div style="flex:1;">${fixMath(opt)}</div>
                    `;
                    optionsDiv.appendChild(span);
                });

                qBox.appendChild(optionsDiv);
            }

            // منبع با فرمت صحیح
            if (q.institution) {
                const src = document.createElement("p");
                Object.assign(src.style, {
                    fontSize: "12px",
                    color: "#6b7280",
                    marginTop: "8px",
                    fontStyle: "italic",
                    textAlign: "left",
                    paddingRight: "10px",
                });
                src.innerHTML = `<strong>${q.institution}</strong>`;
                qBox.appendChild(src);
            }

            questionContainer.appendChild(qBox);
        });

        mainBox.appendChild(questionContainer);

        // فوتر پایین صفحه
        const footerBox = document.createElement("div");
        Object.assign(footerBox.style, {
            width: "100%",
            textAlign: "center",
            fontSize: "10px",
            color: "#2563eb",
            borderTop: "2px dashed #2563eb",
            paddingTop: "5px",
            marginTop: "10px",
        });
        footerBox.innerHTML = `Sampa.ir | @Sampa_org | instagram.com/Sampa_org`;
        mainBox.appendChild(footerBox);

        previewContent.appendChild(mainBox);

        const options = {
            margin: 0,
            filename: `${title}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
        };

        html2pdf().from(mainBox).set(options).save();
    } catch (err) {
        console.error("❌ خطا در تولید PDF:", err);
        alert("خطا در تولید PDF. لطفاً دوباره تلاش کنید.");
    }
}

// به‌روزرسانی event listener برای دکمه‌های PDF
document.getElementById('downloadPdf').addEventListener('click', function() {
    generatePDF();
});

document.getElementById('generateExam').addEventListener('click', function() {
    generatePDF();
});

// گرفتن سوالات انتخابی
function getSelectedQuestions() {
    const subject = document.getElementById('examSubject').value;
    const chapter = document.getElementById('examChapter').value;
    const level = document.getElementById('examLevel').value;
    const count = parseInt(document.getElementById('examQuestionCount').value);

    let filteredQuestions = sampleQuestions.filter(q => {
        return (!subject || q.subject === subject) &&
               (!chapter || q.chapter === chapter) &&
               (!level || q.level === level);
    });

    return shuffleArray(filteredQuestions).slice(0, count);
}

// مدیریت کاربران
function openUserManagementModal(userId) {
    const user = appData.users.find(u => u.id === userId);
    if (user) {
        document.getElementById('editUserId').value = user.id;
        document.getElementById('editUserName').value = user.username;
        document.getElementById('editUserPassword').value = '';
        document.getElementById('editUserRole').value = user.role;
        document.getElementById('editUserStatus').value = user.status;
        
        document.getElementById('userManagementModal').classList.add('open');
    }
}

// مدیریت فرم ویرایش کاربر
document.getElementById('userManagementForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = parseInt(document.getElementById('editUserId').value);
    const username = document.getElementById('editUserName').value;
    const password = document.getElementById('editUserPassword').value;
    const role = document.getElementById('editUserRole').value;
    const status = document.getElementById('editUserStatus').value;
    
    const user = appData.users.find(u => u.id === userId);
    if (user) {
        user.username = username;
        if (password) {
            user.password = password;
        }
        user.role = role;
        user.status = status;
        
        showNotification('اطلاعات کاربر با موفقیت ویرایش شد', 'success');
        document.getElementById('userManagementModal').classList.remove('open');
        renderAdminData();
    }
});

// بستن مودال مدیریت کاربر
document.getElementById('closeUserModal').addEventListener('click', function() {
    document.getElementById('userManagementModal').classList.remove('open');
});

document.getElementById('cancelUserEdit').addEventListener('click', function() {
    document.getElementById('userManagementModal').classList.remove('open');
});

// مسدود کردن کاربر
function toggleUserBan(userId) {
    const user = appData.users.find(u => u.id === userId);
    if (user) {
        user.status = user.status === 'banned' ? 'active' : 'banned';
        const statusText = user.status === 'banned' ? 'مسدود' : 'فعال';
        showNotification(`کاربر ${statusText} شد`, 'success');
        renderAdminData();
    }
}

// حذف کاربر
function deleteUser(userId) {
    if (confirm('آیا از حذف این کاربر اطمینان دارید؟')) {
        appData.users = appData.users.filter(u => u.id !== userId);
        showNotification('کاربر با موفقیت حذف شد', 'success');
        renderAdminData();
    }
}

// ویرایش موضوع
function editSubject(subject) {
    const newSubject = prompt('نام جدید موضوع را وارد کنید:', subject);
    if (newSubject && newSubject.trim() !== '') {
        // به‌روزرسانی موضوع در لیست موضوعات
        const index = appData.subjects.indexOf(subject);
        if (index !== -1) {
            appData.subjects[index] = newSubject.trim();
        }
        
        // به‌روزرسانی موضوع در سوالات
        sampleQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
        // به‌روزرسانی موضوع در سوالات کاربر
        appData.userQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
        // به‌روزرسانی موضوع در سوالات ادمین
        appData.adminQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
        // به‌روزرسانی dropdownها
        populateSubjectDropdowns();
        
        showNotification('موضوع با موفقیت ویرایش شد', 'success');
        renderAdminData();
        renderUserData();
    }
}

// حذف موضوع
function deleteSubject(subject) {
    if (confirm(`آیا از حذف موضوع "${subject}" اطمینان دارید؟`)) {
        appData.subjects = appData.subjects.filter(s => s !== subject);
        delete appData.subjectChapters[subject];
        
        // حذف سوالات مربوط به این موضوع
        sampleQuestions = sampleQuestions.filter(q => q.subject !== subject);
        appData.userQuestions = appData.userQuestions.filter(q => q.subject !== subject);
        appData.adminQuestions = appData.adminQuestions.filter(q => q.subject !== subject);
        
        // به‌روزرسانی dropdownها
        populateSubjectDropdowns();
        
        showNotification('موضوع با موفقیت حذف شد', 'success');
        renderAdminData();
        renderUserData();
        updateQuestionsStatistics();
    }
}

// مقداردهی اولیه هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    // event listener برای فیلترهای آزمون
    ['examSubject', 'examChapter', 'examLevel'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateAvailableQuestionsCount);
        }
    });

    // اضافه کردن event listener برای دکمه ذخیره تنظیمات
    const saveSettingsBtn = document.querySelector('#systemSettings button');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            showNotification('تنظیمات با موفقیت ذخیره شد', 'success');
        });
    }
});
// ==================== سیستم فوکوس بازی‌گونه - نسخه تمیز ====================

// داده‌های اصلی بازی
let gameState = {
    // سیستم شهرسازی
    city: {
        name: "شهر تمرکز",
        level: 1,
        population: 1,
        happiness: 50,
        buildings: [],
        resources: {
            wood: 100,
            stone: 50,
            gold: 0,
            knowledge: 0
        },
        productionRates: {
            wood: 1,    // هر 30 ثانیه 1 چوب
            stone: 0.5, // هر 30 ثانیه 0.5 سنگ
            gold: 0,    // از ساختمان‌ها
            knowledge: 2 // هر دقیقه 2 دانش
        }
    },
    
    // سیستم تحقیق
    technologies: [],
    researching: null,
    researchProgress: 0,
    researchTimeLeft: 0,
    
    // مأموریت‌های فعال
    activeMissions: [],
    completedMissions: [],
    missionProgress: {},
    
    // چالش فعال
    activeChallenge: null,
    challengeProgress: 0,
    challengeStreak: 0,
    
    // نمودار هفتگی
    weeklyProgress: {
        days: [0, 0, 0, 0, 0, 0, 0], // شنبه تا جمعه
        currentDayIndex: new Date().getDay() === 6 ? 0 : new Date().getDay() + 1,
        lastUpdate: Date.now()
    },
    
    // آمار فوکوس
    focusStats: {
        totalSeconds: 0,
        todaySeconds: 0,
        currentStreak: 0,
        bestStreak: 0,
        lastSession: null
    }
};

// ساختمان‌های قابل ساخت
const buildings = [
    {
        id: 1,
        name: "نهالستان",
        type: "tree",
        description: "درختان سریع‌تر رشد می‌کنند",
        cost: { wood: 50 },
        buildTime: 60,
        effect: "افزایش 50% تولید چوب",
        level: 1,
        maxLevel: 5,
        production: { wood: 5 },
        sprite: "🌱",
        category: "production"
    },
    {
        id: 2,
        name: "معدن سنگ",
        type: "mine",
        description: "استخراج سنگ از معادن",
        cost: { wood: 30, stone: 20 },
        buildTime: 90,
        effect: "تولید سنگ فعال می‌شود",
        level: 1,
        maxLevel: 3,
        production: { stone: 3 },
        sprite: "⛏️",
        category: "production"
    },
    {
        id: 3,
        name: "کارگاه",
        type: "workshop",
        description: "تبدیل منابع به طلا",
        cost: { wood: 100, stone: 50 },
        buildTime: 120,
        effect: "هر 60 ثانیه 1 طلا تولید می‌کند",
        level: 1,
        maxLevel: 4,
        production: { gold: 1 },
        sprite: "🏠",
        category: "production"
    },
    {
        id: 4,
        name: "کتابخانه",
        type: "research",
        description: "افزایش تولید دانش",
        cost: { wood: 150, stone: 80 },
        buildTime: 180,
        effect: "افزایش 100% تولید دانش",
        level: 1,
        maxLevel: 3,
        production: { knowledge: 5 },
        sprite: "📚",
        category: "knowledge"
    }
];

// تکنولوژی‌های قابل تحقیق
const technologies = [
    {
        id: 1,
        name: "آبیاری پیشرفته",
        description: "سیستم آبیاری اتوماتیک",
        cost: { knowledge: 50 },
        researchTime: 300, // 5 دقیقه
        effect: "افزایش 25% تولید کلی",
        prerequisites: [],
        sprite: "💧",
        unlocked: false
    },
    {
        id: 2,
        name: "مکانیزاسیون",
        description: "استفاده از ماشین‌آلات",
        cost: { knowledge: 100 },
        researchTime: 600, // 10 دقیقه
        effect: "کاهش 30% زمان ساخت",
        prerequisites: [1],
        sprite: "⚙️",
        unlocked: false
    }
];

// مأموریت‌های روزانه
const dailyMissions = [
    {
        id: 1,
        title: "تمرکز ۱۵ دقیقه‌ای",
        description: "یک جلسه ۱۵ دقیقه‌ای فوکوس کامل کن",
        type: "focus",
        target: 900, // ثانیه
        reward: { wood: 50, stone: 25 },
        repeatable: true
    },
    {
        id: 2,
        title: "ساخت نهالستان",
        description: "اولین ساختمان خود را بساز",
        type: "build",
        target: 1, // ساختمان ID 1
        reward: { wood: 100, stone: 50 },
        repeatable: false
    },
    {
        id: 3,
        title: "تحقیق تکنولوژی",
        description: "یک تکنولوژی جدید را کشف کن",
        type: "research",
        target: 1,
        reward: { knowledge: 100, gold: 10 },
        repeatable: true
    }
];

// چالش‌های ویژه
const challenges = [
    {
        id: 1,
        title: "تمرکز ۱ ساعته",
        description: "۶۰ دقیقه تمرکز بدون وقفه",
        target: 3600, // ثانیه
        reward: { gold: 100, knowledge: 200 },
        streakBonus: 50,
        active: false
    }
];

// ==================== توابع اصلی ====================

// رندر صفحه فوکوس
function renderFocusPage() {
    if (!document.getElementById('focusScore')) return;
    
    // آپدیت امتیازات
    updateStatsDisplay();
    
    // رندر اجزای مختلف
    renderCityView();
    renderResourcesPanel();
    renderBuildingsPanel();
    renderTechnologiesPanel();
    renderMissionsPanel();
    renderWeeklyChart();
    
    // آپدیت تایمر
    updateTimerDisplay();
}

// آپدیت نمایش آمار
function updateStatsDisplay() {
    document.getElementById('focusScore').textContent = appData.focusData.focusScore;
    document.getElementById('focusLevel').textContent = appData.focusData.focusLevel;
    document.getElementById('levelProgress').textContent = `${appData.focusData.levelProgress}/100`;
    document.getElementById('levelProgressBar').style.width = `${appData.focusData.levelProgress}%`;
    document.getElementById('totalSessions').textContent = appData.focusData.totalSessions;
    document.getElementById('totalMinutes').textContent = Math.floor(gameState.focusStats.totalSeconds / 60);
    document.getElementById('timeRecord').textContent = Math.floor(gameState.focusStats.bestStreak / 60);
    document.getElementById('todayScore').textContent = Math.floor(gameState.focusStats.todaySeconds / 60);
}

// رندر نمای شهر
function renderCityView() {
    const gameContainer = document.getElementById('gameScene');
    if (!gameContainer) return;
    
    let cityHTML = `
        <div class="text-center">
            <h4 class="text-lg font-bold text-blue-800 mb-4">🏙️ ${gameState.city.name}</h4>
            
            <div class="relative mx-auto mb-6 p-4 bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200" 
                 style="min-height: 300px; max-width: 600px; margin: 0 auto;">
                
                <!-- زمین -->
                <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-500 to-emerald-600 rounded-b-2xl"></div>
                
                <!-- ساختمان‌ها -->
                <div class="relative grid grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-8">
    `;
    
    // نمایش ساختمان‌های ساخته شده
    gameState.city.buildings.forEach((building, index) => {
        const buildingData = buildings.find(b => b.id === building.id);
        if (!buildingData) return;
        
        const isConstructing = building.constructionProgress < buildingData.buildTime;
        const progressPercent = isConstructing ? 
            (building.constructionProgress / buildingData.buildTime) * 100 : 100;
        
        cityHTML += `
            <div class="relative group">
                <div class="building-card p-4 rounded-xl border-2 ${isConstructing ? 'border-yellow-300 bg-yellow-50' : 'border-green-300 bg-white'} 
                     shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                     data-building-id="${building.id}">
                    <div class="text-3xl mb-2 ${isConstructing ? 'opacity-50' : ''}">
                        ${buildingData.sprite}
                    </div>
                    <div class="text-xs font-bold text-gray-700">${buildingData.name}</div>
                    <div class="text-xs text-gray-500">سطح ${building.level}</div>
                    
                    ${isConstructing ? `
                        <div class="mt-2">
                            <div class="text-xs text-yellow-600 mb-1">در حال ساخت...</div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-500 h-2 rounded-full transition-all duration-1000" 
                                     style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    // نقطه خالی برای ساخت جدید
    cityHTML += `
                    <div class="empty-slot flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-gray-300 
                         hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer"
                         onclick="showBuildingMenu()">
                        <i class="fas fa-plus text-gray-400 text-2xl mb-2"></i>
                        <div class="text-xs text-gray-600">ساختمان جدید</div>
                    </div>
                </div>
                
                <!-- اطلاعات شهر -->
                <div class="absolute bottom-4 left-4 right-4 flex justify-between text-xs">
                    <div class="bg-white bg-opacity-90 px-3 py-1 rounded-full shadow">
                        <i class="fas fa-users text-blue-600 ml-1"></i>
                        جمعیت: ${gameState.city.population}
                    </div>
                    <div class="bg-white bg-opacity-90 px-3 py-1 rounded-full shadow">
                        <i class="fas fa-smile text-yellow-600 ml-1"></i>
                        رضایت: ${gameState.city.happiness}%
                    </div>
                </div>
            </div>
        </div>
    `;
    
    gameContainer.innerHTML = cityHTML;
    
    // اضافه کردن event listener برای ساختمان‌ها
    document.querySelectorAll('.building-card').forEach(card => {
        card.addEventListener('click', function() {
            const buildingId = parseInt(this.getAttribute('data-building-id'));
            showBuildingDetails(buildingId);
        });
    });
}

// رادر پنل منابع
function renderResourcesPanel() {
    const container = document.getElementById('resourcesPanel') || createResourcesPanel();
    
    container.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                <div class="flex items-center">
                    <div class="bg-green-100 p-2 rounded-lg ml-2">
                        <i class="fas fa-tree text-green-600"></i>
                    </div>
                    <div>
                        <p class="text-xs text-green-600">چوب</p>
                        <h5 class="text-lg font-bold text-green-800">${gameState.city.resources.wood}</h5>
                    </div>
                </div>
                <div class="text-xs text-green-700 mt-1">
                    <i class="fas fa-arrow-up ml-1"></i>
                    ${gameState.city.productionRates.wood}/۳۰ثانیه
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl border border-gray-200">
                <div class="flex items-center">
                    <div class="bg-gray-100 p-2 rounded-lg ml-2">
                        <i class="fas fa-mountain text-gray-600"></i>
                    </div>
                    <div>
                        <p class="text-xs text-gray-600">سنگ</p>
                        <h5 class="text-lg font-bold text-gray-800">${gameState.city.resources.stone}</h5>
                    </div>
                </div>
                <div class="text-xs text-gray-700 mt-1">
                    <i class="fas fa-arrow-up ml-1"></i>
                    ${gameState.city.productionRates.stone}/۳۰ثانیه
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-50 to-amber-50 p-3 rounded-xl border border-yellow-200">
                <div class="flex items-center">
                    <div class="bg-yellow-100 p-2 rounded-lg ml-2">
                        <i class="fas fa-coins text-yellow-600"></i>
                    </div>
                    <div>
                        <p class="text-xs text-yellow-600">طلا</p>
                        <h5 class="text-lg font-bold text-yellow-800">${gameState.city.resources.gold}</h5>
                    </div>
                </div>
                <div class="text-xs text-yellow-700 mt-1">
                    <i class="fas fa-building ml-1"></i>
                    از ساختمان‌ها
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-200">
                <div class="flex items-center">
                    <div class="bg-blue-100 p-2 rounded-lg ml-2">
                        <i class="fas fa-graduation-cap text-blue-600"></i>
                    </div>
                    <div>
                        <p class="text-xs text-blue-600">دانش</p>
                        <h5 class="text-lg font-bold text-blue-800">${gameState.city.resources.knowledge}</h5>
                    </div>
                </div>
                <div class="text-xs text-blue-700 mt-1">
                    <i class="fas fa-arrow-up ml-1"></i>
                    ${gameState.city.productionRates.knowledge}/دقیقه
                </div>
            </div>
        </div>
    `;
}

// ایجاد پنل منابع اگر وجود ندارد
function createResourcesPanel() {
    const panel = document.createElement('div');
    panel.id = 'resourcesPanel';
    panel.className = 'mb-6';
    
    const gameScene = document.getElementById('gameScene');
    if (gameScene && gameScene.parentNode) {
        gameScene.parentNode.insertBefore(panel, gameScene.nextSibling);
    }
    
    return panel;
}

// رندر پنل ساختمان‌ها
function renderBuildingsPanel() {
    const container = document.getElementById('upgradesList');
    if (!container) return;
    
    let buildingsHTML = `
        <div class="mb-6">
            <h5 class="font-bold text-blue-700 mb-3 flex items-center">
                <i class="fas fa-city ml-2"></i> ساختمان‌های قابل ساخت
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    `;
    
    buildings.forEach(building => {
        const isBuilt = gameState.city.buildings.some(b => b.id === building.id);
        const canAfford = canBuildBuilding(building.id);
        
        buildingsHTML += `
            <div class="bg-white p-4 rounded-lg border ${canAfford && !isBuilt ? 'border-blue-200 hover:border-blue-400 cursor-pointer' : 'border-gray-200'} 
                 transition-all ${!canAfford || isBuilt ? 'opacity-75' : ''}"
                 ${canAfford && !isBuilt ? `onclick="startBuilding(${building.id})"` : ''}>
                <div class="flex items-start mb-3">
                    <div class="text-2xl ml-3">${building.sprite}</div>
                    <div class="flex-1">
                        <h6 class="font-bold text-gray-800">${building.name}</h6>
                        <p class="text-xs text-gray-600">${building.description}</p>
                    </div>
                    ${isBuilt ? `
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            ساخته شده
                        </span>
                    ` : ''}
                </div>
                
                <div class="text-xs text-gray-500 mb-2">${building.effect}</div>
                
                <div class="space-y-1 mb-3">
                    ${building.cost.wood ? `
                        <div class="flex justify-between items-center">
                            <span class="text-green-600">چوب:</span>
                            <span class="font-bold ${gameState.city.resources.wood >= building.cost.wood ? 'text-green-700' : 'text-red-600'}">
                                ${building.cost.wood}
                            </span>
                        </div>
                    ` : ''}
                    ${building.cost.stone ? `
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">سنگ:</span>
                            <span class="font-bold ${gameState.city.resources.stone >= building.cost.stone ? 'text-gray-700' : 'text-red-600'}">
                                ${building.cost.stone}
                            </span>
                        </div>
                    ` : ''}
                </div>
                
                <div class="text-xs text-center text-gray-500">
                    زمان ساخت: ${Math.floor(building.buildTime / 60)} دقیقه
                </div>
            </div>
        `;
    });
    
    buildingsHTML += `
            </div>
        </div>
    `;
    
    container.innerHTML = buildingsHTML;
}

// رندر پنل تکنولوژی‌ها
function renderTechnologiesPanel() {
    const container = document.getElementById('researchPanel');
    if (!container) return;
    
    let techHTML = `
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
            <h5 class="font-bold text-purple-700 mb-3 flex items-center">
                <i class="fas fa-flask ml-2"></i> تحقیقات
            </h5>
    `;
    
    if (gameState.researching) {
        const tech = technologies.find(t => t.id === gameState.researching);
        if (tech) {
            const progressPercent = (1 - gameState.researchTimeLeft / tech.researchTime) * 100;
            
            techHTML += `
                <div class="mb-4">
                    <div class="flex items-center mb-2">
                        <div class="text-2xl ml-2">${tech.sprite}</div>
                        <div>
                            <h6 class="font-bold text-purple-800">${tech.name}</h6>
                            <p class="text-xs text-purple-600">در حال تحقیق...</p>
                        </div>
                    </div>
                    
                    <div class="mb-1">
                        <div class="flex justify-between text-xs text-purple-600 mb-1">
                            <span>پیشرفت</span>
                            <span>${Math.floor(progressPercent)}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-1000" 
                                 style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                    
                    <div class="text-xs text-center text-gray-500 mt-2">
                        ${Math.ceil(gameState.researchTimeLeft / 60)} دقیقه باقی‌مانده
                    </div>
                </div>
            `;
        }
    }
    
    techHTML += `
        <div class="space-y-3">
    `;
    
    technologies.forEach(tech => {
        const isResearched = gameState.technologies.includes(tech.id);
        const prerequisitesMet = tech.prerequisites.every(p => gameState.technologies.includes(p));
        const canResearch = !isResearched && prerequisitesMet && 
                           gameState.city.resources.knowledge >= tech.cost.knowledge;
        
        techHTML += `
            <div class="flex items-center justify-between p-3 rounded-lg ${isResearched ? 'bg-green-100 border border-green-200' : 'bg-white border border-gray-200'}">
                <div class="flex items-center">
                    <div class="text-xl ml-3">${tech.sprite}</div>
                    <div>
                        <h6 class="font-bold ${isResearched ? 'text-green-800' : 'text-gray-800'}">${tech.name}</h6>
                        <p class="text-xs ${isResearched ? 'text-green-600' : 'text-gray-600'}">${tech.description}</p>
                    </div>
                </div>
                
                ${!isResearched ? `
                    <button onclick="${canResearch ? `startResearch(${tech.id})` : ''}" 
                            class="px-3 py-1 ${canResearch ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-gray-300 text-gray-500'} rounded text-sm">
                        ${canResearch ? `${tech.cost.knowledge} دانش` : 'قفل شده'}
                    </button>
                ` : `
                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded text-sm">
                        <i class="fas fa-check ml-1"></i> تحقیق شده
                    </span>
                `}
            </div>
        `;
    });
    
    techHTML += `
        </div>
    </div>`;
    
    container.innerHTML = techHTML;
}

// رندر پنل مأموریت‌ها
function renderMissionsPanel() {
    const container = document.getElementById('missionsPanel');
    if (!container) return;
    
    // اگر مأموریت فعالی نداریم، ایجاد کن
    if (gameState.activeMissions.length === 0) {
        initializeDailyMissions();
    }
    
    let missionsHTML = `
        <div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200">
            <h5 class="font-bold text-orange-700 mb-3 flex items-center">
                <i class="fas fa-tasks ml-2"></i> مأموریت‌های روزانه
            </h5>
            
            <div class="space-y-3">
    `;
    
    gameState.activeMissions.forEach(missionData => {
        const mission = dailyMissions.find(m => m.id === missionData.id);
        if (!mission) return;
        
        const progress = gameState.missionProgress[mission.id] || 0;
        const isCompleted = progress >= mission.target;
        const progressPercent = (progress / mission.target) * 100;
        
        missionsHTML += `
            <div class="bg-white p-3 rounded-lg border ${isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-200'}">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h6 class="font-bold ${isCompleted ? 'text-green-800' : 'text-gray-800'}">
                            ${mission.title}
                        </h6>
                        <p class="text-xs ${isCompleted ? 'text-green-600' : 'text-gray-600'}">
                            ${mission.description}
                        </p>
                    </div>
                    ${isCompleted ? `
                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            تکمیل شده
                        </span>
                    ` : ''}
                </div>
                
                <div class="mb-2">
                    <div class="flex justify-between text-xs text-gray-600 mb-1">
                        <span>پیشرفت</span>
                        <span>${Math.floor(progress)}/${mission.target}</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full transition-all duration-1000" 
                             style="width: ${Math.min(progressPercent, 100)}%"></div>
                    </div>
                </div>
                
                <div class="flex justify-between items-center">
                    <div class="text-xs text-gray-500">
                        جایزه: 
                        ${mission.reward.wood ? `<i class="fas fa-tree text-green-500 ml-1"></i> ${mission.reward.wood} ` : ''}
                        ${mission.reward.stone ? `<i class="fas fa-mountain text-gray-500 ml-1"></i> ${mission.reward.stone} ` : ''}
                        ${mission.reward.knowledge ? `<i class="fas fa-graduation-cap text-blue-500 ml-1"></i> ${mission.reward.knowledge}` : ''}
                    </div>
                    ${isCompleted ? `
                        <button onclick="claimMissionReward(${mission.id})" 
                                class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">
                            دریافت جایزه
                        </button>
                    ` : `
                        <span class="px-3 py-1 bg-gray-300 text-gray-500 rounded text-sm">
                            در حال انجام
                        </span>
                    `}
                </div>
            </div>
        `;
    });
    
    missionsHTML += `
            </div>
        </div>
    `;
    
    container.innerHTML = missionsHTML;
}

// رندر نمودار هفتگی واقعی
function renderWeeklyChart() {
    const chartContainer = document.getElementById('progressChart');
    if (!chartContainer) return;
    
    const dayNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    const maxValue = Math.max(...gameState.weeklyProgress.days, 1);
    
    let chartHTML = `
        <div class="flex items-end h-40 gap-2 justify-between">
    `;
    
    gameState.weeklyProgress.days.forEach((value, index) => {
        const heightPercent = maxValue > 0 ? (value / maxValue) * 100 : 0;
        const isToday = index === gameState.weeklyProgress.currentDayIndex;
        
        chartHTML += `
            <div class="text-center flex-1">
                <div class="relative mb-2 mx-auto" style="width: 80%;">
                    <div class="bg-gradient-to-t ${isToday ? 'from-green-500 to-emerald-600' : 'from-blue-400 to-blue-500'} 
                         rounded-t-lg transition-all duration-1000" 
                         style="height: ${heightPercent}%;">
                         
                        <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow text-xs font-bold
                             ${isToday ? 'text-green-700' : 'text-blue-700'}">
                            ${Math.floor(value / 60)} دقیقه
                        </div>
                    </div>
                </div>
                <p class="text-xs ${isToday ? 'text-green-700 font-bold' : 'text-gray-600'}">${dayNames[index]}</p>
            </div>
        `;
    });
    
    chartHTML += `</div>`;
    
    chartContainer.innerHTML = chartHTML;
}

// ==================== سیستم تایمر تمیز ====================

// شروع تایمر حالت عادی (شمارنده رو به بالا)
function startTimer() {
    if (appData.timerState.isRunning) return;
    
    appData.timerState.isRunning = true;
    appData.timerState.isPaused = false;
    appData.timerState.startTime = Date.now();
    
    updateTimerControls();
    showNotification('⏱️ تایمر شروع شد! موفق باشید 🚀', 'success');
    
    // پاک کردن اینتروال قبلی
    if (appData.timerState.timerInterval) {
        clearInterval(appData.timerState.timerInterval);
    }
    
    // شروع شمارنده رو به بالا
    appData.timerState.timerInterval = setInterval(() => {
        // افزایش ثانیه‌ها
        appData.timerState.elapsedSeconds = Math.floor((Date.now() - appData.timerState.startTime) / 1000);
        updateTimerDisplay();
        
        // هر ۳۰ ثانیه: تولید منابع
        if (appData.timerState.elapsedSeconds % 30 === 0) {
            produceResources();
        }
        
        // هر دقیقه: پیشرفت مأموریت‌ها
        if (appData.timerState.elapsedSeconds % 60 === 0) {
            updateMissionProgress();
            updateWeeklyProgress();
        }
        
        // هر ۵ دقیقه: تولید دانش
        if (appData.timerState.elapsedSeconds % 300 === 0) {
            produceKnowledge();
        }
        
        // بررسی چالش
        if (gameState.activeChallenge) {
            updateChallengeProgress();
        }
        
        // رندر صفحه
        renderFocusPage();
        
    }, 1000); // به‌روزرسانی هر ثانیه
}

// توقف تایمر
function pauseTimer() {
    if (!appData.timerState.isRunning) return;
    
    appData.timerState.isRunning = false;
    appData.timerState.isPaused = true;
    appData.timerState.pauseTime = Date.now();
    
    clearInterval(appData.timerState.timerInterval);
    
    // نمایش دکمه ادامه
    document.getElementById('pauseTimer').style.display = 'none';
    document.getElementById('continueTimer').style.display = 'inline-flex';
    
    showNotification('⏸️ تایمر متوقف شد', 'warning');
}

// ادامه تایمر
function continueTimer() {
    if (!appData.timerState.isPaused) return;
    
    // محاسبه زمان توقف
    const pauseDuration = Date.now() - appData.timerState.pauseTime;
    appData.timerState.startTime += pauseDuration;
    
    appData.timerState.isRunning = true;
    appData.timerState.isPaused = false;
    
    // پنهان کردن دکمه ادامه
    document.getElementById('continueTimer').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'inline-flex';
    
    // ادامه تایمر
    appData.timerState.timerInterval = setInterval(() => {
        appData.timerState.elapsedSeconds = Math.floor((Date.now() - appData.timerState.startTime) / 1000);
        updateTimerDisplay();
        
        // سایر عملیات...
        if (appData.timerState.elapsedSeconds % 30 === 0) {
            produceResources();
        }
        
        renderFocusPage();
    }, 1000);
    
    showNotification('▶️ تایمر ادامه یافت', 'success');
}

// پایان فوکوس (دستی توسط کاربر)
function endFocusSession() {
    if (!appData.timerState.isRunning && !appData.timerState.isPaused) return;
    
    // توقف تایمر
    clearInterval(appData.timerState.timerInterval);
    
    // محاسبه کل زمان
    const totalSeconds = appData.timerState.elapsedSeconds || 0;
    
    // ثبت آمار
    gameState.focusStats.totalSeconds += totalSeconds;
    gameState.focusStats.todaySeconds += totalSeconds;
    gameState.focusStats.lastSession = Date.now();
    
    // آپدیت نمودار هفتگی
    updateWeeklyProgress(totalSeconds);
    
    // محاسبه پاداش‌ها
    calculateSessionRewards(totalSeconds);
    
    // نمایش نتایج
    showSessionResults(totalSeconds);
    
    // ریست تایمر
    resetTimer();
    
    showNotification('🎉 جلسه فوکوس با موفقیت پایان یافت!', 'success');
}

// محاسبه پاداش‌های جلسه
function calculateSessionRewards(seconds) {
    const minutes = seconds / 60;
    
    // امتیاز پایه
    let basePoints = minutes * 10;
    
    // ضریب ساختمان‌ها
    let multiplier = 1.0;
    gameState.city.buildings.forEach(building => {
        const buildingData = buildings.find(b => b.id === building.id);
        if (buildingData && !building.constructionProgress) {
            // اعمال اثر ساختمان‌ها
            if (buildingData.type === 'tree') multiplier *= 1.2;
            if (buildingData.type === 'mine') multiplier *= 1.1;
            if (buildingData.type === 'workshop') multiplier *= 1.3;
        }
    });
    
    // ضریب تکنولوژی‌ها
    gameState.technologies.forEach(techId => {
        const tech = technologies.find(t => t.id === techId);
        if (tech) {
            if (tech.id === 1) multiplier *= 1.25; // آبیاری پیشرفته
            if (tech.id === 2) multiplier *= 1.15; // مکانیزاسیون
        }
    });
    
    // ضریب رضایت
    multiplier *= (gameState.city.happiness / 100);
    
    // محاسبه نهایی
    const finalPoints = Math.floor(basePoints * multiplier);
    
    // اضافه کردن امتیاز
    appData.focusData.focusScore += finalPoints;
    appData.focusData.levelProgress += finalPoints;
    
    // تولید منابع بر اساس زمان
    const resourcesGained = {
        wood: Math.floor(minutes * gameState.city.productionRates.wood * multiplier),
        stone: Math.floor(minutes * gameState.city.productionRates.stone * multiplier),
        knowledge: Math.floor(minutes * gameState.city.productionRates.knowledge * multiplier)
    };
    
    // اضافه کردن منابع
    gameState.city.resources.wood += resourcesGained.wood;
    gameState.city.resources.stone += resourcesGained.stone;
    gameState.city.resources.knowledge += resourcesGained.knowledge;
    
    // تولید طلا از ساختمان‌ها
    gameState.city.buildings.forEach(building => {
        const buildingData = buildings.find(b => b.id === building.id);
        if (buildingData && buildingData.production && buildingData.production.gold && !building.constructionProgress) {
            gameState.city.resources.gold += Math.floor(minutes * buildingData.production.gold * multiplier);
        }
    });
    
    // افزایش جمعیت
    if (finalPoints > 1000) {
        gameState.city.population += Math.floor(finalPoints / 1000);
    }
    
    // افزایش رضایت
    gameState.city.happiness = Math.min(gameState.city.happiness + Math.floor(minutes / 5), 100);
    
    // بررسی ارتقای سطح
    while (appData.focusData.levelProgress >= 100) {
        appData.focusData.level++;
        appData.focusData.levelProgress -= 100;
        
        // پاداش سطح
        const levelReward = appData.focusData.level * 100;
        appData.focusData.focusScore += levelReward;
        gameState.city.resources.gold += levelReward;
        
        showNotification(`🎯 سطح ${appData.focusData.level} رسیدی! +${levelReward} امتیاز`, 'success');
    }
    
    return {
        points: finalPoints,
        resources: resourcesGained,
        multiplier: multiplier.toFixed(2)
    };
}

// نمایش نتایج جلسه
function showSessionResults(seconds) {
    const minutes = Math.floor(seconds / 60);
    const rewards = calculateSessionRewards(seconds);
    
    const resultsHTML = `
        <div class="modal open" id="sessionResultsModal">
            <div class="modal-content max-w-md">
                <div class="text-center p-6">
                    <div class="text-5xl mb-4">🏆</div>
                    <h3 class="text-xl font-bold text-green-800 mb-2">جلسه فوکوس تکمیل شد!</h3>
                    <p class="text-gray-600 mb-6">${minutes} دقیقه تمرکز عالی داشتید</p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                            <div class="text-2xl text-blue-600 mb-2">⏱️</div>
                            <p class="text-sm text-blue-700">مدت زمان</p>
                            <h4 class="text-lg font-bold text-blue-800">${minutes} دقیقه</h4>
                        </div>
                        <div class="bg-gradient-to-br from-yellow-50 to-amber-100 p-4 rounded-xl">
                            <div class="text-2xl text-yellow-600 mb-2">⭐</div>
                            <p class="text-sm text-yellow-700">امتیاز کسب شده</p>
                            <h4 class="text-lg font-bold text-yellow-800">${rewards.points}</h4>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl mb-6">
                        <h4 class="font-bold text-green-800 mb-3">🎁 منابع کسب شده</h4>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="flex items-center">
                                <i class="fas fa-tree text-green-600 ml-2"></i>
                                <span class="text-gray-700">چوب:</span>
                                <span class="font-bold text-green-700 mr-auto">+${rewards.resources.wood}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-mountain text-gray-600 ml-2"></i>
                                <span class="text-gray-700">سنگ:</span>
                                <span class="font-bold text-gray-700 mr-auto">+${rewards.resources.stone}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-coins text-yellow-600 ml-2"></i>
                                <span class="text-gray-700">طلا:</span>
                                <span class="font-bold text-yellow-700 mr-auto">+${gameState.city.resources.gold}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-graduation-cap text-blue-600 ml-2"></i>
                                <span class="text-gray-700">دانش:</span>
                                <span class="font-bold text-blue-700 mr-auto">+${rewards.resources.knowledge}</span>
                            </div>
                        </div>
                        <div class="text-xs text-center text-gray-500 mt-3">
                            ضریب عملکرد: ${rewards.multiplier}x
                        </div>
                    </div>
                    
                    <button onclick="closeModal('sessionResultsModal')" 
                            class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 font-bold shadow-lg hover:shadow-xl transition-all">
                        بستن و ادامه
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalContainer').innerHTML = resultsHTML;
}

// ==================== توابع سیستم منابع ====================

// تولید منابع بر اساس ساختمان‌ها
function produceResources() {
    // تولید پایه (چوب و سنگ)
    gameState.city.resources.wood += gameState.city.productionRates.wood;
    gameState.city.resources.stone += gameState.city.productionRates.stone;
    
    // تولید از ساختمان‌ها
    gameState.city.buildings.forEach(building => {
        if (!building.constructionProgress) { // اگر ساختمان کامل شده
            const buildingData = buildings.find(b => b.id === building.id);
            if (buildingData && buildingData.production) {
                Object.keys(buildingData.production).forEach(resource => {
                    gameState.city.resources[resource] += buildingData.production[resource];
                });
            }
        }
    });
    
    renderFocusPage();
}

// تولید دانش
function produceKnowledge() {
    // تولید پایه دانش
    gameState.city.resources.knowledge += gameState.city.productionRates.knowledge;
    
    // تولید از ساختمان‌های دانش
    gameState.city.buildings.forEach(building => {
        const buildingData = buildings.find(b => b.id === building.id);
        if (buildingData && buildingData.category === 'knowledge' && !building.constructionProgress) {
            gameState.city.resources.knowledge += buildingData.production.knowledge || 0;
        }
    });
    
    renderFocusPage();
}

// ==================== توابع ساختمان‌ها ====================

// بررسی امکان ساخت ساختمان
function canBuildBuilding(buildingId) {
    const building = buildings.find(b => b.id === buildingId);
    if (!building) return false;
    
    // بررسی اینکه قبلاً ساخته نشده باشد
    if (gameState.city.buildings.some(b => b.id === buildingId && !b.constructionProgress)) {
        return false;
    }
    
    // بررسی منابع
    return (
        gameState.city.resources.wood >= (building.cost.wood || 0) &&
        gameState.city.resources.stone >= (building.cost.stone || 0)
    );
}

// شروع ساخت ساختمان
function startBuilding(buildingId) {
    if (!canBuildBuilding(buildingId)) {
        showNotification('منابع کافی نیست یا ساختمان قبلاً ساخته شده', 'error');
        return;
    }
    
    const building = buildings.find(b => b.id === buildingId);
    
    // کسر منابع
    gameState.city.resources.wood -= building.cost.wood || 0;
    gameState.city.resources.stone -= building.cost.stone || 0;
    
    // اضافه کردن ساختمان در حال ساخت
    const newBuilding = {
        id: building.id,
        level: 1,
        constructionProgress: 0,
        constructionTime: building.buildTime
    };
    
    gameState.city.buildings.push(newBuilding);
    
    // شروع تایمر ساخت
    const buildInterval = setInterval(() => {
        const buildingIndex = gameState.city.buildings.findIndex(b => 
            b.id === buildingId && b.constructionProgress < b.constructionTime
        );
        
        if (buildingIndex !== -1) {
            gameState.city.buildings[buildingIndex].constructionProgress++;
            
            // اگر ساخت کامل شد
            if (gameState.city.buildings[buildingIndex].constructionProgress >= building.buildTime) {
                clearInterval(buildInterval);
                
                // افزایش جمعیت
                gameState.city.population += 5;
                
                // افزایش رضایت
                gameState.city.happiness = Math.min(gameState.city.happiness + 10, 100);
                
                // افزایش نرخ تولید
                if (building.type === 'tree') {
                    gameState.city.productionRates.wood *= 1.5;
                } else if (building.type === 'mine') {
                    gameState.city.productionRates.stone *= 2.0;
                }
                
                showNotification(`🎉 ${building.name} با موفقیت ساخته شد!`, 'success');
                
                // به‌روزرسانی مأموریت ساخت ساختمان
                updateMissionProgress(buildingId, 'build');
            }
            
            renderFocusPage();
        } else {
            clearInterval(buildInterval);
        }
    }, 1000);
    
    showNotification(`🏗️ ساخت ${building.name} آغاز شد!`, 'success');
    renderFocusPage();
}

// ==================== توابع تحقیق ====================

// شروع تحقیق تکنولوژی
function startResearch(techId) {
    const tech = technologies.find(t => t.id === techId);
    if (!tech || gameState.researching) return;
    
    // بررسی دانش کافی
    if (gameState.city.resources.knowledge < tech.cost.knowledge) {
        showNotification('دانش کافی نیست', 'error');
        return;
    }
    
    // کسر دانش
    gameState.city.resources.knowledge -= tech.cost.knowledge;
    
    // شروع تحقیق
    gameState.researching = techId;
    gameState.researchTimeLeft = tech.researchTime;
    
    // تایمر تحقیق
    const researchInterval = setInterval(() => {
        if (gameState.researchTimeLeft > 0) {
            gameState.researchTimeLeft--;
            gameState.researchProgress = ((tech.researchTime - gameState.researchTimeLeft) / tech.researchTime) * 100;
        } else {
            clearInterval(researchInterval);
            completeResearch(techId);
        }
        
        renderFocusPage();
    }, 1000);
    
    showNotification(`🔬 تحقیق "${tech.name}" آغاز شد!`, 'success');
    renderFocusPage();
}

// تکمیل تحقیق
function completeResearch(techId) {
    const tech = technologies.find(t => t.id === techId);
    if (!tech) return;
    
    gameState.technologies.push(techId);
    gameState.researching = null;
    gameState.researchProgress = 0;
    
    // اعمال اثر تکنولوژی
    if (tech.id === 1) { // آبیاری پیشرفته
        gameState.city.productionRates.wood *= 1.25;
        gameState.city.productionRates.stone *= 1.25;
    } else if (tech.id === 2) { // مکانیزاسیون
        // کاهش زمان ساخت ساختمان‌ها
        buildings.forEach(b => {
            b.buildTime = Math.floor(b.buildTime * 0.7);
        });
    }
    
    // به‌روزرسانی مأموریت
    updateMissionProgress(techId, 'research');
    
    showNotification(`🎓 تکنولوژی "${tech.name}" کشف شد!`, 'success');
    renderFocusPage();
}

// ==================== توابع مأموریت‌ها ====================

// مقداردهی اولیه مأموریت‌های روزانه
function initializeDailyMissions() {
    // پاک کردن مأموریت‌های قدیمی
    gameState.activeMissions = [];
    gameState.missionProgress = {};
    
    // انتخاب ۳ مأموریت تصادفی
    const shuffledMissions = [...dailyMissions].sort(() => Math.random() - 0.5);
    const selectedMissions = shuffledMissions.slice(0, 3);
    
    selectedMissions.forEach(mission => {
        gameState.activeMissions.push({
            id: mission.id,
            claimed: false
        });
        gameState.missionProgress[mission.id] = 0;
    });
}

// پیشرفت مأموریت‌ها
function updateMissionProgress(targetId = null, type = 'focus') {
    gameState.activeMissions.forEach(missionData => {
        const mission = dailyMissions.find(m => m.id === missionData.id);
        if (!mission || missionData.claimed) return;
        
        let progress = gameState.missionProgress[mission.id] || 0;
        
        switch(mission.type) {
            case 'focus':
                // هر دقیقه ۶۰ ثانیه به پیشرفت اضافه می‌شود
                progress = Math.min(progress + 60, mission.target);
                break;
                
            case 'build':
                if (type === 'build' && targetId === mission.target) {
                    progress = mission.target;
                }
                break;
                
            case 'research':
                if (type === 'research') {
                    progress = mission.target;
                }
                break;
        }
        
        gameState.missionProgress[mission.id] = progress;
        
        // اگر مأموریت تکمیل شد
        if (progress >= mission.target && !missionData.claimed) {
            showNotification(`✅ مأموریت "${mission.title}" تکمیل شد!`, 'success');
        }
    });
    
    renderFocusPage();
}

// دریافت جایزه مأموریت
function claimMissionReward(missionId) {
    const mission = dailyMissions.find(m => m.id === missionId);
    const missionData = gameState.activeMissions.find(m => m.id === missionId);
    
    if (!mission || !missionData || missionData.claimed) return;
    
    // اعمال جایزه
    Object.keys(mission.reward).forEach(resource => {
        gameState.city.resources[resource] += mission.reward[resource];
    });
    
    // علامت‌گذاری به عنوان دریافت شده
    missionData.claimed = true;
    
    // اگر قابل تکرار نیست، حذفش کن
    if (!mission.repeatable) {
        const index = gameState.activeMissions.findIndex(m => m.id === missionId);
        if (index !== -1) {
            gameState.activeMissions.splice(index, 1);
        }
    } else {
        // ریست پیشرفت
        gameState.missionProgress[missionId] = 0;
    }
    
    showNotification(`🎁 جایزه مأموریت "${mission.title}" دریافت شد!`, 'success');
    renderFocusPage();
}

// ==================== نمودار هفتگی ====================

// آپدیت نمودار هفتگی
function updateWeeklyProgress(seconds = 0) {
    // اگر زمان داده نشده، از تایمر فعلی بگیر
    if (seconds === 0 && appData.timerState.elapsedSeconds) {
        seconds = appData.timerState.elapsedSeconds;
    }
    
    const minutes = seconds / 60;
    
    // آپدیت روز جاری
    gameState.weeklyProgress.days[gameState.weeklyProgress.currentDayIndex] += minutes;
    
    // بررسی تغییر روز
    const now = new Date();
    const todayIndex = now.getDay() === 6 ? 0 : now.getDay() + 1;
    
    if (todayIndex !== gameState.weeklyProgress.currentDayIndex) {
        gameState.weeklyProgress.currentDayIndex = todayIndex;
        gameState.weeklyProgress.lastUpdate = now.getTime();
        
        // ریست آمار روزانه
        gameState.focusStats.todaySeconds = 0;
        
        // ایجاد مأموریت‌های جدید روزانه
        if (now.getHours() >= 0 && now.getHours() < 6) {
            initializeDailyMissions();
        }
    }
    
    renderWeeklyChart();
}

// ==================== توابع کمکی ====================

// آپدیت نمایش تایمر (شمارنده رو به بالا)
function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;
    
    const seconds = appData.timerState.elapsedSeconds || 0;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
        timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    } else {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // افکت ویژه بعد از ۵ دقیقه
    if (seconds >= 300) {
        timerDisplay.classList.add('text-green-600', 'font-bold');
    } else {
        timerDisplay.classList.remove('text-green-600', 'font-bold');
    }
}

// آپدیت کنترل‌های تایمر
function updateTimerControls() {
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    const continueBtn = document.getElementById('continueTimer');
    const endBtn = document.getElementById('endFocusBtn') || createEndFocusButton();
    
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (continueBtn) continueBtn.style.display = 'none';
    if (pauseBtn) pauseBtn.style.display = 'inline-flex';
    if (endBtn) endBtn.disabled = false;
}

// ایجاد دکمه پایان فوکوس
function createEndFocusButton() {
    const timerActions = document.querySelector('.timer-actions');
    if (!timerActions) return null;
    
    const endBtn = document.createElement('button');
    endBtn.id = 'endFocusBtn';
    endBtn.className = 'px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-bold shadow-lg hover:shadow-xl';
    endBtn.innerHTML = '<i class="fas fa-stop ml-2"></i> پایان فوکوس';
    endBtn.addEventListener('click', endFocusSession);
    
    timerActions.appendChild(endBtn);
    return endBtn;
}

// ریست تایمر
function resetTimer() {
    clearInterval(appData.timerState.timerInterval);
    
    appData.timerState.isRunning = false;
    appData.timerState.isPaused = false;
    appData.timerState.timerInterval = null;
    appData.timerState.elapsedSeconds = 0;
    appData.timerState.startTime = null;
    appData.timerState.pauseTime = null;
    
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    const continueBtn = document.getElementById('continueTimer');
    const endBtn = document.getElementById('endFocusBtn');
    
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) {
        pauseBtn.disabled = true;
        pauseBtn.style.display = 'inline-flex';
    }
    if (continueBtn) continueBtn.style.display = 'none';
    if (endBtn) endBtn.disabled = true;
    
    updateTimerDisplay();
}

// تغییر حالت فوکوس
function changeFocusMode(mode) {
    appData.timerState.mode = mode;
    
    // حذف active از همه دکمه‌ها
    document.querySelectorAll('.focus-mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // اضافه کردن active به دکمه انتخاب شده
    const activeBtn = document.getElementById(`focus${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // تغییر عنوان
    const modeTitles = {
        normal: '🌱 حالت عادی',
        pomodoro: '🍅 پومودورو',
        challenge: '⚔️ چالش ویژه'
    };
    
    const titleElement = document.getElementById('focusModeTitle');
    if (titleElement) {
        titleElement.textContent = modeTitles[mode] || 'حالت فوکوس';
    }
    
    // تنظیم زمان‌ها فقط برای حالت‌های محدود
    if (mode === 'pomodoro') {
        appData.timerState.focusMinutes = 25;
        appData.timerState.breakMinutes = 5;
        document.getElementById('focusTime').value = 25;
        document.getElementById('breakTime').value = 5;
    } else if (mode === 'challenge') {
        appData.timerState.focusMinutes = 15;
        appData.timerState.breakMinutes = 3;
        document.getElementById('focusTime').value = 15;
        document.getElementById('breakTime').value = 3;
    }
    
    resetTimer();
}

// تنظیم زمان‌ها فقط برای پومودورو و چالش
function setFocusTime() {
    if (appData.timerState.mode === 'normal') return;
    
    const focusTime = parseInt(document.getElementById('focusTime').value);
    const breakTime = parseInt(document.getElementById('breakTime').value);
    
    if (focusTime >= 5 && focusTime <= 120) {
        appData.timerState.focusMinutes = focusTime;
    }
    
    if (breakTime >= 1 && breakTime <= 30) {
        appData.timerState.breakMinutes = breakTime;
    }
    
    resetTimer();
}

// مقداردهی اولیه
function initializeFocusMode() {
    // دکمه‌های حالت
    document.getElementById('focusNormal')?.addEventListener('click', () => changeFocusMode('normal'));
    document.getElementById('focusPomodoro')?.addEventListener('click', () => changeFocusMode('pomodoro'));
    document.getElementById('focusChallenge')?.addEventListener('click', () => changeFocusMode('challenge'));
    
    // دکمه‌های تایمر
    document.getElementById('startTimer')?.addEventListener('click', startTimer);
    document.getElementById('pauseTimer')?.addEventListener('click', pauseTimer);
    document.getElementById('continueTimer')?.addEventListener('click', continueTimer);
    
    // تنظیمات زمان فقط برای حالت‌های محدود
    const focusTimeInput = document.getElementById('focusTime');
    const breakTimeInput = document.getElementById('breakTime');
    
    if (focusTimeInput && breakTimeInput) {
        focusTimeInput.addEventListener('change', setFocusTime);
        breakTimeInput.addEventListener('change', setFocusTime);
        
        // غیرفعال کردن برای حالت عادی
        if (appData.timerState.mode === 'normal') {
            focusTimeInput.disabled = true;
            breakTimeInput.disabled = true;
        }
    }
    
    // مقداردهی اولیه
    changeFocusMode('normal');
    
    // بارگذاری داده‌های ذخیره شده
    loadGameState();
}

// بارگذاری حالت بازی از localStorage
function loadGameState() {
    try {
        const saved = localStorage.getItem('focusGameState');
        if (saved) {
            const parsed = JSON.parse(saved);
            // فقط برخی داده‌ها را بارگذاری کن
            gameState.city.resources = parsed.city?.resources || gameState.city.resources;
            gameState.city.buildings = parsed.city?.buildings || gameState.city.buildings;
            gameState.weeklyProgress = parsed.weeklyProgress || gameState.weeklyProgress;
            gameState.focusStats = parsed.focusStats || gameState.focusStats;
        }
    } catch (e) {
        console.log('خطا در بارگذاری ذخیره‌ها:', e);
    }
}

// ذخیره حالت بازی در localStorage
function saveGameState() {
    try {
        localStorage.setItem('focusGameState', JSON.stringify(gameState));
    } catch (e) {
        console.log('خطا در ذخیره:', e);
    }
}

// ذخیره خودکار هر ۳۰ ثانیه
setInterval(saveGameState, 30000);

// اجرای مقداردهی اولیه
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeFocusMode();
        renderFocusPage();
    }, 100);
});
