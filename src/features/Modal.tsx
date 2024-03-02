import React from "react"

type propTypes = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}
const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `}
      onClick={onClose}>
      <div
        className={` rounded-lg shadow 
        transition-all  
        ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
