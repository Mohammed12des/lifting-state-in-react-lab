// `src/components/BurgerStack.jsx`

const BurgerStack = (props) => {
  return (
    <ul>
      {props.burger.map((barger) => (
        <li style={{ backgroundColor: barger.color }}>
          <p>{barger.name}</p>
          <button
            onClick={() => {
              handelRomve(barger);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
