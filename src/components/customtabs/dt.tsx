import React from 'react'

type TabsProps = {
    tabscontent : string,
}
const DynamicTabs = ({tabscontent} :   TabsProps) => {
  return (
    <div className="p-6 text-gray-700">
      {tabscontent}
    </div>
  )
}

export default DynamicTabs