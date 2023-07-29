import React from 'react'

import {useParams, useSearchParams, useLocation} from 'react-router-dom'

export default function Detail() {
    const {id} = useParams<{id:string}>()
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const {state:{content}} = location

  return (
    <div>
        <h3>Detail 页面内容</h3>
        <ul>
            <li>message id: {id}</li>
            <li>message title: {searchParams.get('title')}</li>
            <li>message content: {content}</li>
        </ul>
    </div>
  )
}
