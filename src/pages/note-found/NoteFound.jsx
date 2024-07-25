import { memo } from 'react'
import Empty from '../../components/empty/Empty'
import img from "../../assets/note-found/noteFound.webp"
const NoteFound = () => {
    return (
        <>
            <section className='note-found'>
                <Empty images={img} />
            </section>
        </>
    )
}

export default memo(NoteFound)