const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
        <p className="text-lg text-gray-700 mb-4">
          В Dexter School мы верим, что каждый ученик может полюбить математику
          и достичь высоких результатов при правильном подходе к обучению.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Наша миссия — сделать изучение математики понятным, интересным и
          эффективным. Мы стремимся разрушить стереотип о том, что математика —
          это скучный и сложный предмет.
        </p>
        <p className="text-lg text-gray-700">
          Мы развиваем логическое мышление, применяем индивидуальный подход к
          каждому ученику и создаем дружественную атмосферу, в которой ученики
          не боятся задавать вопросы и совершать ошибки.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
          alt="Студенты изучают математику"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MissionSection;
