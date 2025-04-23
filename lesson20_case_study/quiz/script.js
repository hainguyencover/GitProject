// === Biến toàn cục ===
let selectedTopic = null;
let quizData = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let startTime = null;

// DOM element shortcuts
const topicDropdown = document.getElementById("topicDropdown");
const quizDiv = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const resultDiv = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const explanationList = document.getElementById("explanationList");
const historyList = document.getElementById("historyList");
const historyDiv = document.getElementById("history");
const totalTimeText = document.getElementById("totalTime");
const questionButtons = document.getElementById("questionButtons");

// === Load chủ đề theo chế độ (Lý thuyết / Bài tập) ===
function loadTopicsByMode() {
    const mode = document.getElementById("modeSelector").value;
    const dropdown = document.getElementById("topicDropdown");

    dropdown.innerHTML = '<option value="" disabled selected>-- Chọn chủ đề --</option>';

    if (!questionsByTopic[mode]) return;

    for (let topic in questionsByTopic[mode]) {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        dropdown.appendChild(option);
    }

    M.FormSelect.init(dropdown);
}

// === Bắt đầu Quiz ===
function startQuiz() {
    const mode = document.getElementById("modeSelector").value;
    selectedTopic = topicDropdown.value;

    if (!mode || !selectedTopic) {
        Swal.fire({
            title: 'Lỗi',
            text: 'Vui lòng chọn loại và chủ đề.',
            icon: 'warning',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    quizData = questionsByTopic[mode][selectedTopic];
    currentQuestionIndex = 0;
    selectedAnswers = [];
    startTime = new Date();

    document.getElementById("topic-selector").classList.add("hidden");
    quizDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    historyDiv.classList.add("hidden");

    showQuestion();
    renderQuestionButtons();
}

// === Khởi tạo Materialize dropdown ===
document.addEventListener("DOMContentLoaded", () => {
    M.AutoInit();
});

// === Hiển thị câu hỏi hiện tại ===
function showQuestion() {
    const q = quizData[currentQuestionIndex];
    questionText.textContent = `Câu ${currentQuestionIndex + 1}: ${q.question}`;

    // Hiển thị ảnh
    const img = document.getElementById("questionImage");
    if (q.image) {
        img.src = q.image;
        img.classList.remove("hidden");
    } else {
        img.src = "";
        img.classList.add("hidden");
        console.warn(`⚠️ Câu ${currentQuestionIndex + 1} không có hình ảnh!`);
    }

    optionsContainer.innerHTML = '';
    const savedAnswer = selectedAnswers[currentQuestionIndex];
    const correctIndex = q.options.findIndex(opt => opt === q.answer);

    q.options.forEach((opt, idx) => {
        const label = document.createElement("label");
        label.className = "answer-box text-black";

        if (savedAnswer) {
            if (idx === savedAnswer.correct) label.classList.add("correct");
            else if (idx === savedAnswer.selected && !savedAnswer.isCorrect) label.classList.add("incorrect");
        }

        label.innerHTML = `
            <input name="answer" type="radio" value="${idx}" ${savedAnswer?.selected === idx ? 'checked' : ''}/>
            <span>${opt}</span>
        `;
        optionsContainer.appendChild(label);
    });

    renderQuestionButtons();
}

// === Nút chuyển câu hỏi ===
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// === Kiểm tra đáp án ===
function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Vui lòng chọn đáp án.',
            icon: 'info',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    const userAnswer = parseInt(selected.value);
    const question = quizData[currentQuestionIndex];

    const correctIndex = question.options.findIndex(opt => opt === question.answer);
    const isCorrect = userAnswer === correctIndex;

    selectedAnswers[currentQuestionIndex] = {
        selected: userAnswer,
        correct: correctIndex,
        explanation: question.explanation,
        isCorrect
    };

    showQuestion(); // Hiển thị lại với màu
    
    Swal.fire({
        title: isCorrect ? 'Đúng rồi!' : 'Chưa đúng!',
        html: `
            <div class="answer-feedback">
                <p><strong>Đáp án đúng:</strong> ${question.options[correctIndex]}</p>
                <p><strong>Giải thích:</strong> ${question.explanation}</p>
            </div>
        `,
        icon: isCorrect ? 'success' : 'error',
        confirmButtonText: 'Tiếp tục',
        confirmButtonColor: '#3085d6'
    });

    if (selectedAnswers.filter(a => a !== undefined).length === quizData.length) {
        showResult();
    }
}

// === Hiển thị kết quả bài làm ===
function showResult() {
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000);
    let score = 0;
    explanationList.innerHTML = '';

    selectedAnswers.forEach((ans, idx) => {
        const q = quizData[idx];
        if (ans.isCorrect) score++;
        const item = document.createElement('div');
        item.className = ans.isCorrect ? 'result-item correct' : 'result-item incorrect';
        item.innerHTML = `
            <strong>Câu ${idx + 1}</strong><br>
            <span class="${ans.isCorrect ? 'green-text' : 'red-text'}">
                <i class="fas ${ans.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                Bạn chọn: ${q.options[ans.selected]}
            </span><br>
            <span class="green-text"><i class="fas fa-check"></i> Đáp án đúng: ${q.options[ans.correct]}</span><br>
            <em><i class="fas fa-info-circle"></i> Giải thích: ${ans.explanation}</em>
            <hr>
        `;
        explanationList.appendChild(item);
    });

    scoreText.innerHTML = `
        <i class="fas fa-bullseye"></i> Bạn đúng <span class="green-text text-darken-2">${score}/${quizData.length}</span> câu. 
        <i class="fas fa-clock"></i> Thời gian làm bài: <span class="blue-text">${duration} giây</span>.
    `;

    quizDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');

    saveHistory(score, quizData.length, duration);
}

// === Lưu lịch sử vào localStorage ===
function saveHistory(score, total, time) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push({
        topic: selectedTopic,
        score,
        total,
        time,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

// === Hiển thị lịch sử ===
function showHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    historyList.innerHTML = '';
    let totalTime = 0;

    history.forEach(entry => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = `
            <i class="fas fa-calendar-alt"></i> ${entry.date} - 
            <i class="fas fa-book"></i> ${entry.topic} - 
            <i class="fas fa-star"></i> ${entry.score}/${entry.total} - 
            <i class="fas fa-clock"></i> ${entry.time}s
        `;
        historyList.appendChild(li);
        totalTime += entry.time;
    });

    totalTimeText.innerHTML = `<i class="fas fa-calculator"></i> Tổng thời gian đã làm: <b>${totalTime}</b> giây.`;

    resultDiv.classList.add('hidden');
    historyDiv.classList.remove('hidden');
}

// === Xác nhận xoá lịch sử ===
function confirmClearHistory() {
    Swal.fire({
        title: 'Bạn có chắc chắn?',
        text: "Xóa toàn bộ lịch sử làm bài!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            clearHistory();
            Swal.fire(
                'Đã xóa!',
                'Lịch sử của bạn đã được xóa.',
                'success'
            );
        }
    });
}

// === Xoá lịch sử ===
function clearHistory() {
    localStorage.removeItem('quizHistory');
    showHistory();
}

// === Làm lại bài ===
function resetQuiz() {
    document.getElementById("topic-selector").classList.remove("hidden");
    quizDiv.classList.add("hidden");
    resultDiv.classList.add("hidden");
    historyDiv.classList.add("hidden");
}

// === Tạo các nút chọn nhanh câu hỏi ===
function renderQuestionButtons() {
    questionButtons.innerHTML = '';
    for (let i = 0; i < quizData.length; i++) {
        const btn = document.createElement('button');
        const isAnswered = selectedAnswers[i] !== undefined;
        btn.className = `btn-small ${isAnswered ? 'blue lighten-2 white-text' : 'grey lighten-1 black-text'}`;
        btn.innerHTML = isAnswered ? 
            `<i class="fas fa-check-circle"></i> ${i + 1}` : 
            `${i + 1}`;
        btn.onclick = () => {
            currentQuestionIndex = i;
            showQuestion();
        };
        questionButtons.appendChild(btn);
    }
}
