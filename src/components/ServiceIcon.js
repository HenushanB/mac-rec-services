import {Image} from 'react-native'

const ServiceIcon = ({uri}) => {
    return(
        <Image
            style={{width: 35, height: 35, borderRadius: 50}}
            source={{
                uri: uri
            }}
        />
    )
}

export default ServiceIcon;