import React, { useEffect, useContext } from 'react'
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Input } from "antd"
import { useImmer } from 'use-immer'
import DispatchContext from '../DispatchContext';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  const appDispatch = useContext(DispatchContext)
  const [state, setState] = useImmer({
    searchTerm: "",
    requestCount: 0
  })
  useEffect(() => {
    if (state.searchTerm.trim()) {
      appDispatch({ type: "search-loading" })
      const delay = setTimeout(() => {
        appDispatch({ type: "get-value" })
      }, 100)

      return () => clearTimeout(delay)
    } else {
      appDispatch({ type: "close-search" })
    }
  }, [state.requestCount])

  const handleValue = val => {
    setState((draft) => {
      draft.searchTerm = val
    })
  }


  return (
    <div>
      <Input onChange={(e) => handleValue(e.target.value)} prefix={<SearchOutlined />} placeholder="Search Jobs" size="medium" suffix={<Button onClick={() => navigate("/search-jobs")}><EnvironmentOutlined />Mainland, Mi</Button>} />
    </div>
  )
}

export default Search