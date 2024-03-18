import css from "./ErrorMessage.module.css";

function ErrorMessage() {
    return (
        <div className={css.container}>
            <b>Oops! Error! Reload please!</b>
        </div>
    );
};

export default ErrorMessage;