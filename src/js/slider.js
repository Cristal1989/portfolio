document.addEventListener('DOMContentLoaded', function () {
  // Получаем все необходимые элементы DOM
  const slides = document.querySelectorAll('.work__list-el');
  const navigationItems = document.querySelectorAll('.work__navigation-el');
  let currentSlideIndex = 0;

  // Функция для обновления слайдера
  function updateSlider() {
    // Убираем активный класс со всех слайдов и элементов навигации
    slides.forEach(function (slide) {
      slide.classList.remove('work__list-el--is-active');
    });
    navigationItems.forEach(function (item) {
      item.classList.remove('work__navigation-el--is-active');
    });

    // Добавляем активный класс к текущему слайду и элементу навигации
    slides[currentSlideIndex].classList.add('work__list-el--is-active');
    navigationItems[currentSlideIndex].classList.add(
      'work__navigation-el--is-active'
    );
  }

  // Функция для переключения на определенный слайд
  function goToSlide(index) {
    currentSlideIndex = index;
    updateSlider();
  }

  // Добавляем обработчики событий для элементов навигации
  navigationItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      goToSlide(index);
    });
  });

  // Автоматическое переключение слайдов каждые 5 секунд
  setInterval(function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider();
  }, 5000);
});
