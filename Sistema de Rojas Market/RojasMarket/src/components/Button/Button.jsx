import "./Button.css";

export const Button = ({ nombre, onClick }) => {
  return (
    <>
      <button className="button" onClick={onClick}>{nombre}</button>
    </>
  );
};
