import Modal from '@/components/Modal'
import WriterDetails from './WriterDetails'

const Introducing = (): any => {
  return (
    <>
      <Modal.Features>
        <img src="/images/opening/doctor.jpg" width="50%" alt="" />
      </Modal.Features>

      <Modal.Details>
        <WriterDetails>
          <strong>양재웅</strong>
          <span>정신과 전문의</span>
          <p>
            정신의학 전문이며 W진병원 대표원장이다.
            <br />
            현재는 방송인을 겸하고 있으며
            <br />
            미스틱스토리에 소속되어있다.
          </p>
        </WriterDetails>
      </Modal.Details>
    </>
  )
}

export default Introducing
