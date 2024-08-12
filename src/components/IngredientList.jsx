// src/components/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.Ingrdient.map((item) => (
        <li key={item.name} style={{ backgroundColor: item.color }}>
          <p>{item.name}</p>
          <button
            onClick={() => {
              props.handel(item);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
