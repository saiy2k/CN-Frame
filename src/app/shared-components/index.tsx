import { Box,
  useStyleConfig 
} from '@chakra-ui/react'

// TODO: Type for 'props'
export const Widget = (props: any) => {
  const { variant, ...rest} = props;
  const styles = useStyleConfig('Widget', {variant});
  return <Box __css={ styles } {...rest} />;
}
