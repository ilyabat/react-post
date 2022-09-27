import React from 'react'
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div className='filter'>
            <div className='filter__input'>
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({ ...filter, query: e.target.value })}
                    placeholder="Пошук..."
                />
            </div>

            <div className='filter__select'>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                    defaultValue='Фільрація по'
                    option={[
                        { value: 'title', name: 'Пошук по назві' },
                        { value: 'body', name: 'Пошук по опису' },
                    ]}
                />
            </div>
        </div>
    )
}

export default PostFilter