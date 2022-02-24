export default function ErrorMessage({isVisible, errorMessage}) {
    return (
      <>
        {isVisible ? (
          <>
            <p className="error-message">{errorMessage}</p>
          </>
        ) : null}
      </>
    );
}