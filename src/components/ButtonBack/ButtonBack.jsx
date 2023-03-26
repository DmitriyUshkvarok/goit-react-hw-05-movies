import css from './ButtonBack.module.css';

const ButtonBack = () => {
  return (
    <>
      <button className={css.btnBack} type="button">
        &#8592; Go Back
      </button>
    </>
  );
};

export default ButtonBack;
