import { Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'

const {Meta} = Card
const PostPreview = ({title, description}) => {

return(
    <>
        <Card title={title} style={{ marginTop: 16 }} 
         actions={[
      <p style={{textAlign: "right", paddingRight:12, margin:"auto"}}>Keep Reading
             <ArrowRightOutlined  key="ellipsis" /></p>,

    ]}

    >
    <Meta description={description}/>
    </Card>
    </>
)
}
export default PostPreview
