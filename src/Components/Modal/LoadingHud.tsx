import React from "react"

interface LoadingHudProps {
  isLoading: Boolean
}

const LoadingHud: React.FC<LoadingHudProps> = ({ isLoading = false }) => {

  if(!isLoading) return null

  return (
    <div 
        style={{ cursor: 'wait'}}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10" >
      
    </div>
  )
}

export default LoadingHud
