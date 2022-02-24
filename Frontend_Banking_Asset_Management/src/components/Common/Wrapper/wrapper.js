export default function Wrapper({children}) { 
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
              {children}
          </div>
     </div>
    )
}