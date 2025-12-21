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
    userFilters: {
        status: 'all',
        role: 'all',
        search: ''
    },
    questionFilters: {
        subject: 'all',
        status: 'all',
        search: '',
        displayMode: 'compact'
    },
    // داده‌های جدید برای حالت فوکوس
    focusSystem: {
        dailyTotalSeconds: 0,
        dailyTimerRunning: true,
        dailyTimerInterval: null,
        studyTimerRunning: false,
        studyTimerInterval: null,
        studyStartTime: null,
        studyElapsedSeconds: 0,
        pomodoroTimerRunning: false,
        pomodoroInterval: null,
        pomodoroState: 'focus',
        pomodoroRemainingSeconds: 25 * 60,
        pomodoroFocusMinutes: 25,
        pomodoroBreakMinutes: 5,
        pomodoroSessionsCompleted: 0,
        applesCollected: 0,
        applesStored: 0,
        subjects: [
            { id: 1, name: "ریاضی", color: "purple", totalHours: 12, todayHours: 2, weeklyHours: 12 },
            { id: 2, name: "فیزیک", color: "emerald", totalHours: 8, todayHours: 1.5, weeklyHours: 8 },
            { id: 3, name: "شیمی", color: "blue", totalHours: 6, todayHours: 1, weeklyHours: 6 }
        ],
        studyHistory: [],
        weeklyData: [2, 3, 1.5, 2.5, 3, 2, 1.5],
        totalStudyHours: 26,
        streakDays: 7,
        totalApples: 5,
        activeSubjects: 3,
        studyGoals: [
            { id: 1, title: "اتمام فصل حسابان", subject: "ریاضی", deadline: "۱۴۰۲/۰۷/۱۵", completed: false },
            { id: 2, title: "مطالعه ۵ ساعت فیزیک", subject: "فیزیک", deadline: "۱۴۰۲/۰۷/۱۰", completed: true }
        ]
    }
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
    if (!notification) return;
    
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
        document.getElementById('authPage').classList.add('hidden');
        document.getElementById('adminPanel').classList.remove('hidden');
        showNotification('خوش آمدید مدیر سیستم!', 'success');
        initializeAppData();
        renderAdminData();
    } else {
        document.getElementById('authPage').classList.add('hidden');
        document.getElementById('userPanel').classList.remove('hidden');
        showNotification('خوش آمدید!', 'success');
        initializeAppData();
        renderUserData();
    }
});

// مقداردهی اولیه داده‌های برنامه
function initializeAppData() {
    populateSubjectDropdowns();
    initializeChapterDropdowns();
    updateQuestionsStatistics();
    initializeSystemSettings();
    initializeFocusMode();
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
            while (dropdown.options.length > 1) {
                dropdown.remove(1);
            }
            
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
            updateChapterOptions(subjectDropdown.value, pair.chapterId);
            
            subjectDropdown.addEventListener('change', function() {
                updateChapterOptions(this.value, pair.chapterId);
                
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
    
    while (chapterSelect.options.length > 1) {
        chapterSelect.remove(1);
    }
    
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
        
        document.querySelectorAll('#adminPanel .sidebar-item').forEach(i => {
            i.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('#adminPanel > div > main > div').forEach(div => {
            div.classList.add('hidden');
        });
        
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.remove('hidden');
        
        document.getElementById('adminPageTitle').textContent = this.querySelector('span').textContent;
        
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
        
        document.querySelectorAll('#userPanel .sidebar-item').forEach(i => {
            i.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('#userPanel > div > main > div').forEach(div => {
            div.classList.add('hidden');
        });
        
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.remove('hidden');
        
        document.getElementById('userPageTitle').textContent = this.querySelector('span').textContent;
        
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
    updateRecentActivities();
    renderUsersTable();
    renderQuestionsTable();
    renderSubjectsList();
}

// به روزرسانی فعالیت‌های اخیر با زمان واقعی
function updateRecentActivities() {
    const now = new Date();
    const timeAgo1 = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    const timeAgo2 = new Date(now.getTime() - 30 * 60 * 1000);
    const timeAgo3 = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
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
    if (!usersTable) return;
    
    usersTable.innerHTML = '';
    
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
    if (!questionsTable) return;
    
    questionsTable.innerHTML = '';
    
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
    if (!subjectsList) return;
    
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
    document.getElementById('userQuestionsCount').textContent = appData.currentUser.questionsCount;
    document.getElementById('userApprovedCount').textContent = appData.currentUser.approvedCount;
    document.getElementById('userTotalScore').textContent = appData.currentUser.totalScore;
    document.getElementById('monthlyScoreValue').textContent = appData.currentUser.monthlyScore;
    
    const progressPercent = Math.min(100, (appData.currentUser.monthlyScore / 1000) * 100);
    document.getElementById('monthlyProgress').style.width = `${progressPercent}%`;
    
    const userQuestionsTable = document.getElementById('userQuestionsTable');
    if (userQuestionsTable) {
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
    }
    
    const userScoresTable = document.getElementById('userScoresTable');
    if (userScoresTable) {
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
}

// رندر لیست موضوعات در تنظیمات سیستم
function renderTopicsList() {
    const topicsList = document.getElementById('topicsList');
    if (!topicsList) return;
    
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
    if (!subjectsManagement) return;
    
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
    initializeChapterDropdowns();
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
        
        updateQuestionsChapter(subject, oldChapterName, newChapterName);
        
        showNotification('مبحث با موفقیت ویرایش شد', 'success');
        closeEditChapterModal();
        renderSubjectsManagement();
        initializeChapterDropdowns();
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
        initializeChapterDropdowns();
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
    
    const pageLink = document.querySelector(`#userPanel [data-page="${pageId}"]`);
    if (pageLink) {
        pageLink.classList.add('active');
    }
    
    document.querySelectorAll('#userPanel > div > main > div').forEach(div => {
        div.classList.add('hidden');
    });
    
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.remove('hidden');
    }
    
    const pageTitle = document.getElementById('userPageTitle');
    if (pageTitle && pageLink) {
        pageTitle.textContent = pageLink.querySelector('span').textContent;
    }
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
    
    const adminQuestion = appData.adminQuestions.find(q => q.id === questionId);
    if (adminQuestion) {
        adminQuestion.subject = subject;
        adminQuestion.text = text;
    }
    
    showNotification('سوال با موفقیت ویرایش شد', 'success');
    document.getElementById('editQuestionModal').classList.remove('open');
    
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
        
        if (status === 'approved') {
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

    const availableQuestionsElement = document.getElementById('availableQuestions');
    if (availableQuestionsElement) {
        availableQuestionsElement.textContent = 
            `${filteredQuestions.length} سوال پیدا شد`;
    }
}

// پیش‌نمایش آزمون
document.getElementById('previewExam').addEventListener('click', function() {
    const subject = document.getElementById('examSubject').value;
    const chapter = document.getElementById('examChapter').value;
    const level = document.getElementById('examLevel').value;
    const count = parseInt(document.getElementById('examQuestionCount').value);
    const title = document.getElementById('examTitle').value || "آزمون نمونه";
    const time = document.getElementById('examTime').value;

    let filteredQuestions = sampleQuestions.filter(q => {
        return (!subject || q.subject === subject) &&
               (!chapter || q.chapter === chapter) &&
               (!level || q.level === level);
    });

    filteredQuestions = shuffleArray(filteredQuestions).slice(0, count);

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
    if (!previewContent) return;
    
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
        const index = appData.subjects.indexOf(subject);
        if (index !== -1) {
            appData.subjects[index] = newSubject.trim();
        }
        
        sampleQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
        appData.userQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
        appData.adminQuestions.forEach(q => {
            if (q.subject === subject) {
                q.subject = newSubject.trim();
            }
        });
        
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
        
        sampleQuestions = sampleQuestions.filter(q => q.subject !== subject);
        appData.userQuestions = appData.userQuestions.filter(q => q.subject !== subject);
        appData.adminQuestions = appData.adminQuestions.filter(q => q.subject !== subject);
        
        populateSubjectDropdowns();
        
        showNotification('موضوع با موفقیت حذف شد', 'success');
        renderAdminData();
        renderUserData();
        updateQuestionsStatistics();
    }
}

// مقداردهی اولیه هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    ['examSubject', 'examChapter', 'examLevel'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateAvailableQuestionsCount);
        }
    });

    const saveSettingsBtn = document.querySelector('#systemSettings button');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            showNotification('تنظیمات با موفقیت ذخیره شد', 'success');
        });
    }

    initializeFocusMode();
});
// ==================== FOCUS MODE SYSTEM - کاملاً بازنویسی شده ====================
let focusTimerHandler = null;
let studyTimerHandler = null;
let pomodoroTimerHandler = null;

// ==================== FUNCTIONS ====================

function initializeFocusMode() {
    console.log("📚 Initializing Focus Mode...");
    
    try {
        loadFocusData();
        setupFocusEventListeners();
        updateAllDisplays();
        
        // 1. حذف دکمه شروع تایمر روزانه
        const startDailyBtn = document.getElementById('startDailyTimerBtn');
        if (startDailyBtn) {
            startDailyBtn.style.display = 'none';
        }
        
        // 2. مخفی کردن کنترل‌های تایمر اضافی
        const timerControls = document.querySelector('.timer-controls');
        if (timerControls) {
            timerControls.style.display = 'none';
        }
        
        console.log("✅ Focus Mode Initialized Successfully");
    } catch (error) {
        console.error("❌ Error initializing Focus Mode:", error);
    }
}

// ==================== DATA MANAGEMENT ====================

function loadFocusData() {
    try {
        const saved = localStorage.getItem('focusSystemData');
        if (saved) {
            const parsed = JSON.parse(saved);
            const today = new Date().toDateString();
            
            if (parsed.lastSavedDate !== today) {
                // ریست داده‌های روزانه برای روز جدید
                appData.focusSystem.dailyTotalSeconds = 0;
                appData.focusSystem.applesCollected = 0;
                appData.focusSystem.studyHistory = parsed.studyHistory || [];
                
                // ریست ساعت‌های امروز برای هر درس
                if (appData.focusSystem.subjects) {
                    appData.focusSystem.subjects.forEach(subject => {
                        subject.todayHours = 0;
                    });
                }
            } else {
                // ادغام داده‌های ذخیره شده
                Object.keys(parsed).forEach(key => {
                    if (key !== 'lastSavedDate' && key in appData.focusSystem) {
                        appData.focusSystem[key] = parsed[key];
                    }
                });
            }
        }
    } catch (e) {
        console.warn('⚠️ Could not load focus data:', e);
    }
}

function saveFocusData() {
    try {
        appData.focusSystem.lastSavedDate = new Date().toDateString();
        localStorage.setItem('focusSystemData', JSON.stringify(appData.focusSystem));
    } catch (e) {
        console.warn('⚠️ Could not save focus data:', e);
    }
}

// ==================== STUDY FORM WITH GOALS AND SUBJECTS ====================

function renderStudyForm() {
    const studyForm = document.querySelector('#stopwatchMode .bg-gradient-to-r.from-gray-50.to-gray-100');
    if (studyForm) {
        const existingGoalField = studyForm.querySelector('#studyGoal');
        if (!existingGoalField) {
            const notesField = studyForm.querySelector('#studyNotes');
            if (notesField) {
                const goalContainer = document.createElement('div');
                goalContainer.className = 'mt-3';
                goalContainer.innerHTML = `
                    <label class="block text-sm font-medium text-gray-700 mb-1">🎯 هدف مطالعه (اختیاری)</label>
                    <input type="text" id="studyGoal" 
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200" 
                           placeholder="مثلاً: اتمام فصل ۳، حل ۱۰ سوال، مرور تست‌ها...">
                    <p class="text-xs text-gray-500 mt-1">هدف خود برای این جلسه مطالعه را مشخص کنید</p>
                `;
                notesField.parentNode.insertBefore(goalContainer, notesField);
            }
        }
    }
    
    updateStudySubjectDropdown();
}

function updateStudySubjectDropdown() {
    const dropdown = document.getElementById('studySubject');
    if (!dropdown) return;
    
    while (dropdown.options.length > 0) {
        dropdown.remove(0);
    }
    
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "انتخاب درس";
    dropdown.appendChild(defaultOption);
    
    if (appData.focusSystem.subjects && appData.focusSystem.subjects.length > 0) {
        appData.focusSystem.subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.name;
            option.textContent = subject.name;
            dropdown.appendChild(option);
        });
    } else {
        const defaultSubjects = ["ریاضی", "فیزیک", "شیمی", "زیست شناسی", "ادبیات فارسی", "عربی", "دین و زندگی", "زبان انگلیسی"];
        defaultSubjects.forEach(subjectName => {
            const option = document.createElement('option');
            option.value = subjectName;
            option.textContent = subjectName;
            dropdown.appendChild(option);
        });
    }
}

// ==================== CUSTOM SUBJECTS MANAGEMENT ====================

function setupSubjectsManagement() {
    const subjectsList = document.getElementById('subjectsList');
    if (!subjectsList) return;
    
    const subjectsContainer = subjectsList.closest('.bg-white.rounded-2xl.shadow.p-6');
    if (subjectsContainer) {
        let managementForm = subjectsContainer.querySelector('#subjectsManagementForm');
        
        if (!managementForm) {
            managementForm = document.createElement('div');
            managementForm.id = 'subjectsManagementForm';
            managementForm.className = 'mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-200';
            managementForm.innerHTML = `
                <h5 class="font-bold text-gray-800 mb-3 flex items-center">
                    <i class="fas fa-palette ml-2 text-purple-600"></i>
                    شخصی‌سازی دروس
                </h5>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">نام درس</label>
                        <input type="text" id="manageSubjectName" 
                               class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                               placeholder="مثلاً: هندسه، لغات، گرامر...">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">رنگ درس</label>
                        <select id="manageSubjectColor" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option value="purple">بنفش</option>
                            <option value="blue">آبی</option>
                            <option value="emerald">سبز</option>
                            <option value="amber">زرد</option>
                            <option value="rose">قرمز</option>
                            <option value="teal">فیروزه‌ای</option>
                            <option value="pink">صورتی</option>
                            <option value="indigo">نیلی</option>
                        </select>
                    </div>
                    <div class="flex items-end">
                        <button onclick="saveManagedSubject()" 
                                class="w-full px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all font-medium">
                            <i class="fas fa-plus ml-2"></i>
                            افزودن درس
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <label class="block text-xs font-medium text-gray-700 mb-1">پیش‌نمایش رنگ</label>
                    <div id="colorPreview" class="h-8 rounded-lg border border-gray-300 flex items-center justify-center text-xs font-medium">
                        رنگ انتخاب شده
                    </div>
                </div>
            `;
            
            subjectsContainer.insertBefore(managementForm, subjectsContainer.querySelector('.space-y-3'));
            
            const colorSelect = document.getElementById('manageSubjectColor');
            const colorPreview = document.getElementById('colorPreview');
            
            if (colorSelect && colorPreview) {
                colorSelect.addEventListener('change', function() {
                    const color = this.value;
                    updateColorPreview(color);
                });
                
                updateColorPreview(colorSelect.value);
            }
        }
    }
}

function updateColorPreview(color) {
    const colorPreview = document.getElementById('colorPreview');
    if (!colorPreview) return;
    
    const colorClasses = {
        'purple': 'bg-gradient-to-r from-purple-400 to-purple-600 text-white',
        'blue': 'bg-gradient-to-r from-blue-400 to-blue-600 text-white',
        'emerald': 'bg-gradient-to-r from-emerald-400 to-emerald-600 text-white',
        'amber': 'bg-gradient-to-r from-amber-400 to-amber-600 text-white',
        'rose': 'bg-gradient-to-r from-rose-400 to-rose-600 text-white',
        'teal': 'bg-gradient-to-r from-teal-400 to-teal-600 text-white',
        'pink': 'bg-gradient-to-r from-pink-400 to-pink-600 text-white',
        'indigo': 'bg-gradient-to-r from-indigo-400 to-indigo-600 text-white'
    };
    
    const displayNames = {
        'purple': 'بنفش',
        'blue': 'آبی',
        'emerald': 'سبز',
        'amber': 'زرد',
        'rose': 'قرمز',
        'teal': 'فیروزه‌ای',
        'pink': 'صورتی',
        'indigo': 'نیلی'
    };
    
    colorPreview.className = 'h-8 rounded-lg border border-gray-300 flex items-center justify-center text-xs font-medium';
    colorPreview.classList.add(colorClasses[color]);
    colorPreview.textContent = displayNames[color];
}

function saveManagedSubject() {
    const name = document.getElementById('manageSubjectName').value;
    const color = document.getElementById('manageSubjectColor').value;
    
    if (!name.trim()) {
        showNotification('لطفاً نام درس را وارد کنید', 'error');
        return;
    }
    
    const existingSubject = appData.focusSystem.subjects.find(s => s.name === name);
    if (existingSubject) {
        showNotification('این درس قبلاً اضافه شده است', 'error');
        return;
    }
    
    const newSubject = {
        id: Date.now(),
        name: name.trim(),
        color: color,
        totalHours: 0,
        todayHours: 0,
        weeklyHours: 0
    };
    
    appData.focusSystem.subjects.push(newSubject);
    
    renderSubjectsList();
    updateStudySubjectDropdown();
    
    document.getElementById('manageSubjectName').value = '';
    
    showNotification(`✅ درس "${name}" با رنگ ${getColorName(color)} اضافه شد`, 'success');
    saveFocusData();
}

function getColorName(color) {
    const colorNames = {
        'purple': 'بنفش',
        'blue': 'آبی',
        'emerald': 'سبز',
        'amber': 'زرد',
        'rose': 'قرمز',
        'teal': 'فیروزه‌ای',
        'pink': 'صورتی',
        'indigo': 'نیلی'
    };
    return colorNames[color] || color;
}

// ==================== RENDER SUBJECTS LIST WITH CUSTOM COLORS ====================

function renderSubjectsList() {
    const subjectsList = document.getElementById('subjectsList');
    if (!subjectsList) return;
    
    subjectsList.innerHTML = '';
    
    if (!appData.focusSystem.subjects || appData.focusSystem.subjects.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'text-center py-4 text-gray-500';
        emptyMessage.innerHTML = `
            <div class="text-3xl mb-2">📚</div>
            <p>هنوز درسی اضافه نکرده‌اید</p>
            <p class="text-sm mt-2">از فرم بالا برای افزودن درس جدید استفاده کنید</p>
        `;
        subjectsList.appendChild(emptyMessage);
        return;
    }
    
    appData.focusSystem.subjects.forEach(subject => {
        const colorClass = getTailwindColorClass(subject.color);
        
        const subjectElement = document.createElement('div');
        subjectElement.className = `subject-item ${colorClass.bg} p-3 rounded-lg border ${colorClass.border} mb-2 hover:shadow-md transition-all duration-200`;
        subjectElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full ${colorClass.icon} flex items-center justify-center text-white text-sm font-bold shadow-sm">
                        ${subject.name.charAt(0)}
                    </div>
                    <div>
                        <div class="font-bold text-gray-800">${subject.name}</div>
                        <div class="text-xs text-gray-600">امروز: ${subject.todayHours.toFixed(1)} ساعت</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-bold text-gray-800">${subject.weeklyHours.toFixed(1)} ساعت</div>
                    <div class="text-xs text-gray-600">این هفته</div>
                </div>
            </div>
            <div class="mt-2 flex justify-end">
                <button onclick="editSubjectColor(${subject.id})" class="text-xs px-3 py-1 bg-white/70 rounded hover:bg-white transition-all mr-2">
                    <i class="fas fa-palette ml-1 text-${subject.color}-600"></i>
                    تغییر رنگ
                </button>
                <button onclick="deleteSubject(${subject.id})" class="text-xs px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-all">
                    <i class="fas fa-trash ml-1"></i>
                    حذف
                </button>
            </div>
        `;
        subjectsList.appendChild(subjectElement);
    });
    
    document.getElementById('activeSubjects').textContent = appData.focusSystem.subjects.length;
}

function getTailwindColorClass(color) {
    const colorMap = {
        'purple': {
            bg: 'bg-gradient-to-r from-purple-50 to-pink-50',
            border: 'border-purple-100',
            icon: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        'blue': {
            bg: 'bg-gradient-to-r from-blue-50 to-cyan-50',
            border: 'border-blue-100',
            icon: 'bg-gradient-to-r from-blue-500 to-cyan-500'
        },
        'emerald': {
            bg: 'bg-gradient-to-r from-emerald-50 to-teal-50',
            border: 'border-emerald-100',
            icon: 'bg-gradient-to-r from-emerald-500 to-teal-500'
        },
        'amber': {
            bg: 'bg-gradient-to-r from-amber-50 to-yellow-50',
            border: 'border-amber-100',
            icon: 'bg-gradient-to-r from-amber-500 to-yellow-500'
        },
        'rose': {
            bg: 'bg-gradient-to-r from-rose-50 to-pink-50',
            border: 'border-rose-100',
            icon: 'bg-gradient-to-r from-rose-500 to-pink-500'
        },
        'teal': {
            bg: 'bg-gradient-to-r from-teal-50 to-cyan-50',
            border: 'border-teal-100',
            icon: 'bg-gradient-to-r from-teal-500 to-cyan-500'
        },
        'pink': {
            bg: 'bg-gradient-to-r from-pink-50 to-rose-50',
            border: 'border-pink-100',
            icon: 'bg-gradient-to-r from-pink-500 to-rose-500'
        },
        'indigo': {
            bg: 'bg-gradient-to-r from-indigo-50 to-purple-50',
            border: 'border-indigo-100',
            icon: 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }
    };
    
    return colorMap[color] || colorMap['purple'];
}

function editSubjectColor(subjectId) {
    const subject = appData.focusSystem.subjects.find(s => s.id === subjectId);
    if (!subject) return;
    
    const modalHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div class="bg-white rounded-2xl p-6 w-96 max-w-[90vw] shadow-2xl animate-fade-in">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-gray-800">تغییر رنگ درس "${subject.name}"</h3>
                    <button onclick="closeColorModal()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="grid grid-cols-4 gap-3 mb-6">
                    ${['purple', 'blue', 'emerald', 'amber', 'rose', 'teal', 'pink', 'indigo'].map(color => `
                        <div onclick="selectColorForSubject(${subjectId}, '${color}')" 
                             class="h-16 rounded-lg ${getTailwindColorClass(color).bg} border-2 ${subject.color === color ? 'border-gray-800 shadow-lg' : 'border-transparent'} cursor-pointer hover:scale-105 transition-all flex flex-col items-center justify-center group">
                            <div class="w-8 h-8 rounded-full ${getTailwindColorClass(color).icon} mb-1"></div>
                            <span class="text-xs text-gray-700 group-hover:font-medium">${getColorName(color)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="pt-4 border-t border-gray-200">
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-600">رنگ فعلی: ${getColorName(subject.color)}</span>
                        <button onclick="closeColorModal()" class="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-all">
                            بستن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.getElementById('modalContainer') || createModalContainer();
    modalContainer.innerHTML = modalHTML;
}

function selectColorForSubject(subjectId, color) {
    const subject = appData.focusSystem.subjects.find(s => s.id === subjectId);
    if (subject) {
        subject.color = color;
        renderSubjectsList();
        saveFocusData();
        showNotification(`✅ رنگ درس "${subject.name}" به ${getColorName(color)} تغییر کرد`, 'success');
        closeColorModal();
    }
}

function closeColorModal() {
    const modalContainer = document.getElementById('modalContainer');
    if (modalContainer) {
        modalContainer.innerHTML = '';
    }
}

function createModalContainer() {
    const container = document.createElement('div');
    container.id = 'modalContainer';
    container.className = 'z-50';
    document.body.appendChild(container);
    return container;
}

function deleteSubject(subjectId) {
    if (confirm(`آیا از حذف این درس اطمینان دارید؟`)) {
        const subject = appData.focusSystem.subjects.find(s => s.id === subjectId);
        const subjectName = subject ? subject.name : 'این درس';
        
        appData.focusSystem.subjects = appData.focusSystem.subjects.filter(s => s.id !== subjectId);
        renderSubjectsList();
        updateStudySubjectDropdown();
        saveFocusData();
        showNotification(`✅ درس "${subjectName}" حذف شد`, 'success');
    }
}

// ==================== STUDY TIMER ====================

let studyStartTime = 0;
let studyTotalElapsedSeconds = 0;
let studyPauseStartTime = 0;

function startStudyTimer() {
    if (studyTimerHandler) {
        showNotification('⏱️ تایمر در حال اجراست', 'info');
        return;
    }
    
    const subject = document.getElementById('studySubject').value;
    if (!subject) {
        showNotification('لطفاً درس را انتخاب کنید', 'error');
        return;
    }
    
    appData.focusSystem.studyTimerRunning = true;
    
    // اگر قبلاً پاز شده بود، زمان پاز را محاسبه کن
    if (studyPauseStartTime > 0) {
        const pauseDuration = Math.floor((Date.now() - studyPauseStartTime) / 1000);
        studyStartTime += pauseDuration * 1000;
        studyPauseStartTime = 0;
    } else {
        // اگر اولین بار است که شروع می‌شود
        studyStartTime = Date.now() - (studyTotalElapsedSeconds * 1000);
    }
    
    studyTimerHandler = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - studyStartTime) / 1000);
        
        appData.focusSystem.studyElapsedSeconds = elapsed;
        studyTotalElapsedSeconds = elapsed;
        
        // هماهنگی با تایمر روزانه
        appData.focusSystem.dailyTotalSeconds = elapsed;
        
        updateStudyTimerDisplay();
        updateDailyTimerDisplay();
        updateTreeProgress();
        
        // هر 30 دقیقه یک سیب اضافه کن
        if (elapsed > 0 && elapsed % 1800 === 0) {
            addAppleToTree();
        }
        
        saveFocusData();
    }, 1000);
    
    // نمایش دکمه‌ها
    const startBtn = document.getElementById('startStudyBtn');
    const pauseBtn = document.getElementById('pauseStudyBtn');
    const stopBtn = document.getElementById('stopStudyBtn');
    
    if (startBtn) startBtn.classList.add('hidden');
    if (pauseBtn) pauseBtn.classList.remove('hidden');
    if (stopBtn) stopBtn.classList.remove('hidden');
    
    // ذخیره اطلاعات جلسه
    const topic = document.getElementById('studyTopic').value;
    const notes = document.getElementById('studyNotes').value;
    const goal = document.getElementById('studyGoal').value;
    
    if (!appData.focusSystem.currentSession) {
        appData.focusSystem.currentSession = {
            id: Date.now(),
            subject: subject,
            topic: topic || 'بدون موضوع',
            notes: notes || '',
            goal: goal || '',
            startTime: new Date(),
            timerId: studyTimerHandler
        };
    }
    
    const goalText = goal ? ` (هدف: ${goal})` : '';
    showNotification(`📚 مطالعه ${subject}${goalText} شروع شد`, 'success');
}

function pauseStudyTimer() {
    if (!studyTimerHandler) {
        showNotification('تایمری برای توقف وجود ندارد', 'warning');
        return;
    }
    
    clearInterval(studyTimerHandler);
    studyTimerHandler = null;
    studyPauseStartTime = Date.now();
    
    const startBtn = document.getElementById('startStudyBtn');
    const pauseBtn = document.getElementById('pauseStudyBtn');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    
    showNotification('⏸️ مطالعه متوقف شد', 'warning');
}

function stopStudyTimer() {
    if (!appData.focusSystem.currentSession) {
        showNotification('جلسه‌ای برای پایان دادن وجود ندارد', 'warning');
        return;
    }
    
    if (studyTimerHandler) {
        clearInterval(studyTimerHandler);
        studyTimerHandler = null;
    }
    
    // محاسبه زمان مطالعه
    const duration = studyTotalElapsedSeconds;
    const hours = duration / 3600;
    const minutes = Math.floor(duration / 60);
    
    // ثبت جلسه مطالعه
    const session = appData.focusSystem.currentSession;
    const endTime = new Date();
    
    const historyEntry = {
        id: session.id,
        subject: session.subject,
        topic: session.topic,
        notes: session.notes,
        goal: session.goal,
        startTime: session.startTime.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        endTime: endTime.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        date: endTime.toLocaleDateString('fa-IR'),
        duration: duration,
        durationFormatted: `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`,
        durationHours: (duration / 3600).toFixed(2)
    };
    
    appData.focusSystem.studyHistory.unshift(historyEntry);
    
    // آپدیت آمار درس
    updateSubjectStats(session.subject, duration);
    
    // آپدیت آمار کلی
    appData.focusSystem.totalStudyHours += hours;
    
    // اضافه کردن سیب
    if (duration >= 1800) {
        const applesToAdd = Math.floor(duration / 1800);
        for (let i = 0; i < applesToAdd; i++) {
            addAppleToTree();
        }
    }
    
    // ریست متغیرهای تایمر
    studyStartTime = 0;
    studyTotalElapsedSeconds = 0;
    studyPauseStartTime = 0;
    
    // ریست نمایش دکمه‌ها
    const startBtn = document.getElementById('startStudyBtn');
    const pauseBtn = document.getElementById('pauseStudyBtn');
    const stopBtn = document.getElementById('stopStudyBtn');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    if (stopBtn) stopBtn.classList.add('hidden');
    
    document.getElementById('currentTimer').textContent = '00:00:00';
    
    // ریست داده‌های جلسه
    appData.focusSystem.studyTimerRunning = false;
    appData.focusSystem.studyElapsedSeconds = 0;
    appData.focusSystem.currentSession = null;
    
    // ریست فرم
    document.getElementById('studyTopic').value = '';
    document.getElementById('studyNotes').value = '';
    document.getElementById('studyGoal').value = '';
    
    // آپدیت نمایش‌ها
    updateStudyHistory();
    renderSubjectsList();
    updateTotalStats();
    generateWeeklyDataFromHistory();
    renderWeeklyChart();
    saveFocusData();
    
    const goalText = session.goal ? ` (هدف: ${session.goal})` : '';
    showNotification(`✅ مطالعه ${session.subject}${goalText} تکمیل شد! زمان: ${minutes} دقیقه`, 'success');
}

function updateStudyTimerDisplay() {
    const elapsed = appData.focusSystem.studyElapsedSeconds;
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    
    const timerElement = document.getElementById('currentTimer');
    if (timerElement) {
        timerElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// ==================== POMODORO TIMER ====================

let pomodoroStartTime = 0;
let pomodoroTotalElapsedSeconds = 0;
let pomodoroPauseStartTime = 0;

function startPomodoroTimer() {
    if (pomodoroTimerHandler) {
        showNotification('⏱️ پومودورو در حال اجراست', 'info');
        return;
    }
    
    appData.focusSystem.pomodoroTimerRunning = true;
    
    const totalTime = appData.focusSystem.pomodoroState === 'focus' ? 
        appData.focusSystem.pomodoroFocusMinutes * 60 : 
        appData.focusSystem.pomodoroBreakMinutes * 60;
    
    // اگر قبلاً پاز شده بود، زمان پاز را محاسبه کن
    if (pomodoroPauseStartTime > 0) {
        const pauseDuration = Math.floor((Date.now() - pomodoroPauseStartTime) / 1000);
        pomodoroStartTime += pauseDuration * 1000;
        pomodoroPauseStartTime = 0;
    } else {
        // اگر اولین بار است که شروع می‌شود
        pomodoroStartTime = Date.now() - (pomodoroTotalElapsedSeconds * 1000);
    }
    
    pomodoroTimerHandler = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - pomodoroStartTime) / 1000);
        
        pomodoroTotalElapsedSeconds = elapsed;
        const remaining = Math.max(0, totalTime - elapsed);
        
        appData.focusSystem.pomodoroRemainingSeconds = remaining;
        
        // هماهنگی با تایمر روزانه
        appData.focusSystem.dailyTotalSeconds = elapsed;
        
        updatePomodoroTimerDisplay();
        updateDailyTimerDisplay();
        updateTreeProgress();
        
        if (remaining <= 0) {
            completePomodoroSession();
        }
        
        saveFocusData();
    }, 1000);
    
    const startBtn = document.getElementById('startPomodoroBtn');
    const pauseBtn = document.getElementById('pausePomodoroBtn');
    const skipBtn = document.getElementById('skipPomodoroBtn');
    
    if (startBtn) startBtn.classList.add('hidden');
    if (pauseBtn) pauseBtn.classList.remove('hidden');
    if (skipBtn) skipBtn.classList.remove('hidden');
    
    const status = appData.focusSystem.pomodoroState === 'focus' ? 'تمرکز' : 'استراحت';
    showNotification(`⏱️ جلسه ${status} پومودورو شروع شد`, 'success');
}

function pausePomodoroTimer() {
    if (!pomodoroTimerHandler) {
        showNotification('پومودورویی برای توقف وجود ندارد', 'warning');
        return;
    }
    
    clearInterval(pomodoroTimerHandler);
    pomodoroTimerHandler = null;
    pomodoroPauseStartTime = Date.now();
    
    const startBtn = document.getElementById('startPomodoroBtn');
    const pauseBtn = document.getElementById('pausePomodoroBtn');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    
    showNotification('⏸️ پومودورو متوقف شد', 'warning');
}

function skipPomodoroSession() {
    if (pomodoroTimerHandler) {
        clearInterval(pomodoroTimerHandler);
        pomodoroTimerHandler = null;
    }
    
    // ریست زمان پاز
    pomodoroStartTime = 0;
    pomodoroTotalElapsedSeconds = 0;
    pomodoroPauseStartTime = 0;
    
    appData.focusSystem.pomodoroState = appData.focusSystem.pomodoroState === 'focus' ? 'break' : 'focus';
    
    const startBtn = document.getElementById('startPomodoroBtn');
    const pauseBtn = document.getElementById('pausePomodoroBtn');
    const skipBtn = document.getElementById('skipPomodoroBtn');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    if (skipBtn) skipBtn.classList.add('hidden');
    
    updatePomodoroTimerDisplay();
    updatePomodoroStatus();
    
    showNotification('⏭️ جلسه پومودورو رد شد', 'info');
}

function completePomodoroSession() {
    if (pomodoroTimerHandler) {
        clearInterval(pomodoroTimerHandler);
        pomodoroTimerHandler = null;
    }
    
    // ریست زمان پاز
    pomodoroStartTime = 0;
    pomodoroTotalElapsedSeconds = 0;
    pomodoroPauseStartTime = 0;
    
    appData.focusSystem.pomodoroSessionsCompleted++;
    
    const startBtn = document.getElementById('startPomodoroBtn');
    const pauseBtn = document.getElementById('pausePomodoroBtn');
    const skipBtn = document.getElementById('skipPomodoroBtn');
    
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    if (skipBtn) skipBtn.classList.add('hidden');
    
    if (appData.focusSystem.pomodoroState === 'focus') {
        appData.focusSystem.pomodoroState = 'break';
        showNotification('🎉 جلسه تمرکز پومودورو کامل شد! زمان استراحت شروع می‌شود', 'success');
        
        addAppleToTree();
        
        appData.focusSystem.pomodoroRemainingSeconds = appData.focusSystem.pomodoroBreakMinutes * 60;
    } else {
        showNotification('✅ استراحت شما کامل شد! آماده جلسه تمرکز بعدی هستید', 'info');
        appData.focusSystem.pomodoroState = 'focus';
        
        appData.focusSystem.pomodoroRemainingSeconds = appData.focusSystem.pomodoroFocusMinutes * 60;
    }
    
    appData.focusSystem.pomodoroTimerRunning = false;
    
    updatePomodoroTimerDisplay();
    updatePomodoroStatus();
    saveFocusData();
}

function updatePomodoroTimerDisplay() {
    const remaining = appData.focusSystem.pomodoroRemainingSeconds;
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    
    const timerElement = document.getElementById('pomodoroTimer');
    if (timerElement) {
        timerElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updatePomodoroStatus() {
    const statusElement = document.getElementById('pomodoroStatus');
    if (statusElement) {
        statusElement.textContent = appData.focusSystem.pomodoroState === 'focus' ? 'زمان تمرکز' : 'زمان استراحت';
    }
}

function adjustPomodoroTime(type, change) {
    if (type === 'focus') {
        appData.focusSystem.pomodoroFocusMinutes = Math.max(5, Math.min(60, appData.focusSystem.pomodoroFocusMinutes + change));
        const displayElement = document.getElementById('focusTimeDisplay');
        if (displayElement) displayElement.textContent = appData.focusSystem.pomodoroFocusMinutes;
    } else {
        appData.focusSystem.pomodoroBreakMinutes = Math.max(1, Math.min(30, appData.focusSystem.pomodoroBreakMinutes + change));
        const displayElement = document.getElementById('breakTimeDisplay');
        if (displayElement) displayElement.textContent = appData.focusSystem.pomodoroBreakMinutes;
    }
    
    if (!appData.focusSystem.pomodoroTimerRunning && appData.focusSystem.pomodoroState === 'focus') {
        appData.focusSystem.pomodoroRemainingSeconds = appData.focusSystem.pomodoroFocusMinutes * 60;
        updatePomodoroTimerDisplay();
    }
    
    saveFocusData();
}

// ==================== DAILY TIMER DISPLAY ====================

function updateDailyTimerDisplay() {
    const totalSeconds = appData.focusSystem.dailyTotalSeconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const timerElement = document.getElementById('dailyTotalTimer');
    if (timerElement) {
        timerElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    const dailyProgress = Math.min(100, (totalSeconds / (8 * 3600)) * 100);
    const progressBar = document.getElementById('dailyProgressBar');
    const progressText = document.getElementById('dailyProgressText');
    
    if (progressBar) progressBar.style.width = `${dailyProgress}%`;
    if (progressText) progressText.textContent = `${Math.floor(dailyProgress)}٪`;
}

// ==================== TREE SYSTEM ====================

function renderTree() {
    const applesContainer = document.getElementById('applesContainer');
    const treeEmptyMessage = document.getElementById('treeEmptyMessage');
    
    if (!applesContainer || !treeEmptyMessage) return;
    
    applesContainer.innerHTML = '';
    
    // اضافه کردن SVG درخت
    const treeSVG = document.createElement('div');
    treeSVG.className = 'absolute inset-0 flex items-center justify-center';
    treeSVG.innerHTML = `
        <div class="relative w-64 h-64">
            <!-- تنه درخت -->
            <div class="absolute w-12 h-32 bg-gradient-to-r from-yellow-900 to-yellow-800 rounded-lg left-1/2 transform -translate-x-1/2 bottom-10"></div>
            
            <!-- شاخ و برگ ها (بالاتر) -->
            <div class="absolute w-48 h-40 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full left-1/2 top-0 transform -translate-x-1/2"></div>
            <div class="absolute w-36 h-36 bg-gradient-to-r from-emerald-700 to-green-600 rounded-full left-1/4 top-4"></div>
            <div class="absolute w-36 h-36 bg-gradient-to-r from-emerald-700 to-green-600 rounded-full right-1/4 top-4"></div>
            
            <!-- گلدان -->
            <div class="absolute w-20 h-8 bg-gradient-to-r from-orange-700 to-orange-600 rounded-lg left-1/2 transform -translate-x-1/2 bottom-2"></div>
        </div>
    `;
    applesContainer.appendChild(treeSVG);
    
    // محاسبه تعداد سیب‌های قابل نمایش
    const applesToShow = Math.floor(appData.focusSystem.dailyTotalSeconds / 1800); // هر نیم ساعت یک سیب
    const collectedApples = appData.focusSystem.applesCollected;
    
    if (applesToShow > 0 || collectedApples > 0) {
        treeEmptyMessage.classList.add('hidden');
        
        // اضافه کردن سیب‌های درختی (فقط یکبار مصرف)
        for (let i = 0; i < applesToShow; i++) {
            const apple = document.createElement('div');
            apple.className = 'apple absolute cursor-pointer z-20 animate-bounce';
            apple.style.left = `${40 + (i * 25) % 40}%`;
            apple.style.top = `${15 + (i * 20) % 50}%`;
            apple.style.fontSize = '2rem';
            apple.innerHTML = '🍎';
            apple.title = 'سیب دانش - کلیک برای جمع‌آوری';
            apple.onclick = () => {
                collectSingleApple(apple);
            };
            applesContainer.appendChild(apple);
        }
        
        // نمایش سیب‌های جمع‌آوری شده
        if (collectedApples > 0) {
            const collectedApple = document.createElement('div');
            collectedApple.className = 'collected-apple absolute z-30 animate-pulse';
            collectedApple.style.left = '85%';
            collectedApple.style.top = '5%';
            collectedApple.style.fontSize = '1.8rem';
            collectedApple.style.fontWeight = 'bold';
            collectedApple.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
            collectedApple.style.padding = '8px 16px';
            collectedApple.style.borderRadius = '25px';
            collectedApple.style.boxShadow = '0 6px 20px rgba(245, 158, 11, 0.4)';
            collectedApple.style.border = '3px solid #d97706';
            collectedApple.innerHTML = `🍎×${collectedApples}`;
            collectedApple.title = `${collectedApples} سیب جمع‌آوری شده`;
            applesContainer.appendChild(collectedApple);
        }
    } else {
        treeEmptyMessage.classList.remove('hidden');
    }
    
    updateAppleStats();
}

function collectSingleApple(appleElement) {
    appData.focusSystem.applesCollected++;
    
    // انیمیشن جمع‌آوری
    appleElement.style.transition = 'all 0.5s ease-out';
    appleElement.style.transform = 'scale(0) rotate(360deg)';
    appleElement.style.opacity = '0';
    
    setTimeout(() => {
        if (appleElement.parentNode) {
            appleElement.parentNode.removeChild(appleElement);
        }
        updateAppleStats();
        showNotification(`🍎 یک سیب جمع‌آوری شد! (جمع: ${appData.focusSystem.applesCollected})`, 'success');
        saveFocusData();
        
        // ریندر مجدد درخت
        renderTree();
    }, 500);
}

function addAppleToTree() {
    appData.focusSystem.applesCollected++;
    updateAppleStats();
    showNotification(`🍎 یک سیب به درخت دانش شما اضافه شد! (جمع: ${appData.focusSystem.applesCollected})`, 'success');
    saveFocusData();
    
    // ریندر مجدد برای نمایش سیب جدید
    renderTree();
}

function collectAllApples() {
    if (appData.focusSystem.applesCollected === 0) {
        showNotification('هنوز سیبی برای جمع‌آوری ندارید!', 'warning');
        return;
    }
    
    const collected = appData.focusSystem.applesCollected;
    appData.focusSystem.applesStored += collected;
    appData.focusSystem.applesCollected = 0;
    
    updateAppleStats();
    renderTree();
    showNotification(`✅ ${collected} سیب جمع‌آوری شد! مجموع سیب‌های ذخیره شده: ${appData.focusSystem.applesStored}`, 'success');
    saveFocusData();
}

function updateAppleStats() {
    const appleCountElement = document.getElementById('appleCount');
    const collectedApplesElement = document.getElementById('collectedApples');
    const storedApplesElement = document.getElementById('storedApples');
    const nextAppleTimeElement = document.getElementById('nextAppleTime');
    
    const applesToShow = Math.floor(appData.focusSystem.dailyTotalSeconds / 1800); // هر نیم ساعت یک سیب
    
    if (appleCountElement) appleCountElement.textContent = applesToShow;
    if (collectedApplesElement) collectedApplesElement.textContent = appData.focusSystem.applesCollected;
    if (storedApplesElement) storedApplesElement.textContent = appData.focusSystem.applesStored;
    
    if (nextAppleTimeElement) {
        const secondsToNextApple = 1800 - (appData.focusSystem.dailyTotalSeconds % 1800);
        const minutesToNextApple = Math.ceil(secondsToNextApple / 60);
        const seconds = secondsToNextApple % 60;
        nextAppleTimeElement.textContent = `${minutesToNextApple.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateTreeProgress() {
    renderTree();
}

// ==================== SUBJECT STATS ====================

function updateSubjectStats(subjectName, durationSeconds) {
    const subject = appData.focusSystem.subjects.find(s => s.name === subjectName);
    if (subject) {
        const hours = durationSeconds / 3600;
        subject.todayHours += hours;
        subject.weeklyHours += hours;
        subject.totalHours += hours;
    }
}

// ==================== STUDY HISTORY ====================

function updateStudyHistory() {
    const studyHistory = document.getElementById('studyHistory');
    if (!studyHistory) return;
    
    studyHistory.innerHTML = '';
    
    const today = new Date().toLocaleDateString('fa-IR');
    const todayHistory = appData.focusSystem.studyHistory.filter(entry => entry.date === today);
    
    if (todayHistory.length === 0) {
        studyHistory.innerHTML = `
            <div class="text-center py-4 text-gray-500">
                <div class="text-3xl mb-2">📝</div>
                <p>هنوز مطالعه‌ای برای امروز ثبت نشده است</p>
                <p class="text-sm mt-2">شروع به مطالعه کنید تا اینجا نمایش داده شود</p>
            </div>
        `;
        document.getElementById('todayTotal').textContent = '۰ ساعت';
        return;
    }
    
    let todayTotalMinutes = 0;
    
    todayHistory.forEach(entry => {
        todayTotalMinutes += entry.duration / 60;
        
        const historyItem = document.createElement('div');
        historyItem.className = 'flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-all';
        historyItem.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 text-sm font-bold">
                    ${entry.subject.charAt(0)}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-800 truncate">${entry.subject} - ${entry.topic}</div>
                    <div class="text-xs text-gray-600">${entry.startTime} - ${entry.endTime}</div>
                    ${entry.goal ? `<div class="text-xs text-emerald-600 mt-1"><i class="fas fa-bullseye ml-1"></i> ${entry.goal}</div>` : ''}
                </div>
            </div>
            <div class="text-sm text-gray-800 font-medium bg-gray-100 px-3 py-1 rounded-lg">${entry.durationFormatted}</div>
        `;
        studyHistory.appendChild(historyItem);
    });
    
    const todayTotalHours = (todayTotalMinutes / 60).toFixed(1);
    document.getElementById('todayTotal').textContent = `${todayTotalHours} ساعت`;
}

// ==================== WEEKLY CHART ====================

function refreshChart() {
    generateWeeklyDataFromHistory();
    renderWeeklyChart();
    updateWeeklyStats();
    showNotification('📊 نمودار هفتگی بروزرسانی شد', 'success');
}

function generateWeeklyDataFromHistory() {
    // ایجاد آرایه برای 7 روز هفته
    const days = [0, 0, 0, 0, 0, 0, 0];
    const today = new Date();
    
    // محاسبه تاریخ 7 روز گذشته
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        last7Days.push(date.toLocaleDateString('fa-IR'));
    }
    
    // پر کردن داده‌ها از تاریخچه مطالعه
    appData.focusSystem.studyHistory.forEach(entry => {
        const dayIndex = last7Days.indexOf(entry.date);
        if (dayIndex !== -1) {
            days[dayIndex] += parseFloat(entry.durationHours || 0);
        }
    });
    
    // حذف داده‌های نمونه و استفاده فقط از داده‌های واقعی
    appData.focusSystem.weeklyData = days.map(hours => parseFloat(hours.toFixed(1)));
}

function renderWeeklyChart() {
    const ctx = document.getElementById('weeklyChart');
    if (!ctx) return;
    
    // روزهای هفته فارسی
    const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    
    // اگر chart قبلی وجود دارد، آن را از بین ببریم
    if (window.weeklyChartInstance) {
        window.weeklyChartInstance.destroy();
    }
    
    // ایجاد نمودار جدید
    window.weeklyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'ساعت مطالعه',
                data: appData.focusSystem.weeklyData,
                backgroundColor: (context) => {
                    const value = context.dataset.data[context.dataIndex];
                    // رنگ‌ها بر اساس مقدار ساعت
                    if (value >= 4) return 'rgba(16, 185, 129, 0.8)'; // سبز برای 4+ ساعت
                    if (value >= 2) return 'rgba(245, 158, 11, 0.8)'; // زرد برای 2-4 ساعت
                    if (value > 0) return 'rgba(239, 68, 68, 0.8)'; // قرمز برای کمتر از 2 ساعت
                    return 'rgba(209, 213, 219, 0.6)'; // خاکستری برای صفر
                },
                borderColor: (context) => {
                    const value = context.dataset.data[context.dataIndex];
                    if (value >= 4) return 'rgb(16, 185, 129)';
                    if (value >= 2) return 'rgb(245, 158, 11)';
                    if (value > 0) return 'rgb(239, 68, 68)';
                    return 'rgb(209, 213, 219)';
                },
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value === 0) return 'بدون مطالعه';
                            return `${value.toFixed(1)} ساعت مطالعه`;
                        },
                        afterLabel: function(context) {
                            const value = context.parsed.y;
                            if (value === 0) return '';
                            
                            // محاسبه تعداد سیب‌های کسب شده (هر نیم ساعت یک سیب)
                            const applesEarned = Math.floor(value * 2); // 2 سیب در ساعت
                            return `🎯 ${applesEarned} سیب کسب شد`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'ساعت مطالعه',
                        font: {
                            family: 'Vazir, sans-serif'
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ' ساعت';
                        },
                        font: {
                            family: 'Vazir, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        font: {
                            family: 'Vazir, sans-serif',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
    
    updateWeeklyStats();
}

function updateWeeklyStats() {
    const weeklyTotal = appData.focusSystem.weeklyData.reduce((a, b) => a + b, 0);
    const dailyAverage = weeklyTotal / 7;
    
    const dailyAverageElement = document.getElementById('dailyAverage');
    const weeklyTotalElement = document.getElementById('weeklyTotal');
    
    if (dailyAverageElement) dailyAverageElement.textContent = `${dailyAverage.toFixed(1)} ساعت`;
    if (weeklyTotalElement) weeklyTotalElement.textContent = `${weeklyTotal.toFixed(1)} ساعت`;
}

// ==================== TOTAL STATS ====================

function updateTotalStats() {
    const totalStudyTime = document.getElementById('totalStudyTime');
    const streakDays = document.getElementById('streakDays');
    const totalApples = document.getElementById('totalApples');
    const activeSubjects = document.getElementById('activeSubjects');
    
    if (totalStudyTime) totalStudyTime.textContent = `${appData.focusSystem.totalStudyHours.toFixed(1)} ساعت`;
    if (streakDays) streakDays.textContent = `${appData.focusSystem.streakDays} روز`;
    if (totalApples) totalApples.textContent = appData.focusSystem.applesCollected + appData.focusSystem.applesStored;
    if (activeSubjects) activeSubjects.textContent = appData.focusSystem.subjects.length;
}

// ==================== MODE SWITCHING ====================

function switchMode(mode) {
    const stopwatchMode = document.getElementById('stopwatchMode');
    const pomodoroMode = document.getElementById('pomodoroMode');
    const switchToStopwatch = document.getElementById('switchToStopwatch');
    const switchToPomodoro = document.getElementById('switchToPomodoro');
    
    if (!stopwatchMode || !pomodoroMode || !switchToStopwatch || !switchToPomodoro) return;
    
    if (mode === 'stopwatch') {
        stopwatchMode.classList.remove('hidden');
        pomodoroMode.classList.add('hidden');
        
        // تغییر استایل دکمه‌ها
        switchToStopwatch.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'text-white');
        switchToStopwatch.classList.remove('bg-gray-100', 'text-gray-700');
        
        switchToPomodoro.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'text-white');
        switchToPomodoro.classList.add('bg-gray-100', 'text-gray-700');
        
        showNotification('🔄 تغییر به حالت تایمر معمولی', 'info');
    } else {
        stopwatchMode.classList.add('hidden');
        pomodoroMode.classList.remove('hidden');
        
        // تغییر استایل دکمه‌ها
        switchToPomodoro.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'text-white');
        switchToPomodoro.classList.remove('bg-gray-100', 'text-gray-700');
        
        switchToStopwatch.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'text-white');
        switchToStopwatch.classList.add('bg-gray-100', 'text-gray-700');
        
        showNotification('🔄 تغییر به حالت پومودورو', 'info');
    }
}

// ==================== SETUP EVENT LISTENERS ====================

function setupFocusEventListeners() {
    // تایمر مطالعه
    document.getElementById('startStudyBtn')?.addEventListener('click', startStudyTimer);
    document.getElementById('pauseStudyBtn')?.addEventListener('click', pauseStudyTimer);
    document.getElementById('stopStudyBtn')?.addEventListener('click', stopStudyTimer);
    
    // تایمر پومودورو
    document.getElementById('startPomodoroBtn')?.addEventListener('click', startPomodoroTimer);
    document.getElementById('pausePomodoroBtn')?.addEventListener('click', pausePomodoroTimer);
    document.getElementById('skipPomodoroBtn')?.addEventListener('click', skipPomodoroSession);
    
    // تنظیمات پومودورو
    document.getElementById('increaseFocusTime')?.addEventListener('click', () => adjustPomodoroTime('focus', 5));
    document.getElementById('decreaseFocusTime')?.addEventListener('click', () => adjustPomodoroTime('focus', -5));
    document.getElementById('increaseBreakTime')?.addEventListener('click', () => adjustPomodoroTime('break', 1));
    document.getElementById('decreaseBreakTime')?.addEventListener('click', () => adjustPomodoroTime('break', -1));
    
    // درخت دانش
    document.getElementById('collectApplesBtn')?.addEventListener('click', collectAllApples);
    
    // نمودار هفتگی
    document.getElementById('refreshChartBtn')?.addEventListener('click', refreshChart);
    
    // سوئیچ حالت‌ها - با event listener صحیح
    document.getElementById('switchToStopwatch')?.addEventListener('click', () => switchMode('stopwatch'));
    document.getElementById('switchToPomodoro')?.addEventListener('click', () => switchMode('pomodoro'));
    
    // رویداد DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            renderStudyForm();
            setupSubjectsManagement();
            
            // تنظیم اولیه حالت
            switchMode('stopwatch');
        }, 100);
    });
}

// ==================== UPDATE ALL DISPLAYS ====================

function updateAllDisplays() {
    updateDailyTimerDisplay();
    updateStudyTimerDisplay();
    updatePomodoroTimerDisplay();
    updatePomodoroStatus();
    renderTree();
    renderStudyForm();
    setupSubjectsManagement();
    renderSubjectsList();
    updateStudySubjectDropdown();
    updateStudyHistory();
    updateTotalStats();
    generateWeeklyDataFromHistory();
    renderWeeklyChart();
}

// ==================== EXPORT FUNCTIONS ====================

window.initializeFocusMode = initializeFocusMode;
window.startStudyTimer = startStudyTimer;
window.pauseStudyTimer = pauseStudyTimer;
window.stopStudyTimer = stopStudyTimer;
window.startPomodoroTimer = startPomodoroTimer;
window.pausePomodoroTimer = pausePomodoroTimer;
window.skipPomodoroSession = skipPomodoroSession;
window.switchMode = switchMode;
window.adjustPomodoroTime = adjustPomodoroTime;
window.saveManagedSubject = saveManagedSubject;
window.editSubjectColor = editSubjectColor;
window.selectColorForSubject = selectColorForSubject;
window.closeColorModal = closeColorModal;
window.deleteSubject = deleteSubject;
window.collectAllApples = collectAllApples;
window.refreshChart = refreshChart;
window.renderStudyForm = renderStudyForm;
window.setupSubjectsManagement = setupSubjectsManagement;
window.collectSingleApple = collectSingleApple;

// ذخیره‌سازی خودکار هر 30 ثانیه
setInterval(() => {
    if (appData.focusSystem.studyTimerRunning || appData.focusSystem.pomodoroTimerRunning) {
        saveFocusData();
    }
}, 30000);

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    const focusModePage = document.getElementById('focusMode');
    if (focusModePage && !focusModePage.classList.contains('hidden')) {
        setTimeout(() => {
            initializeFocusMode();
        }, 100);
    }
});

console.log('📚 Focus Mode System Loaded Successfully');
