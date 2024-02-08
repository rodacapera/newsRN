import * as React from 'react';
import {ViewStyle} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {customCardStyles} from './styles/customCardStyles';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="newspaper" />;

const CustomCard = ({
  title,
  subTitle,
  titleLarge,
  content,
  style,
  image,
  successBtn,
  handleSuccessBtn,
}: {
  title: string;
  subTitle: string;
  titleLarge: string;
  content: string;
  style: ViewStyle;
  image: string;
  successBtn: string;
  handleSuccessBtn: () => void;
}) => (
  <Card style={style}>
    <Card.Title
      titleStyle={customCardStyles.title}
      title={title}
      subtitle={subTitle}
      left={LeftContent}
    />
    <Card.Content>
      <Text style={customCardStyles.titleLarge} variant="titleLarge">
        {titleLarge}
      </Text>
      <Text style={customCardStyles.bodyMedium} variant="bodyMedium">
        {content}
      </Text>
    </Card.Content>
    <Card.Cover source={{uri: image}} />
    <Card.Actions>
      {/* <Button>Cancel</Button> */}
      <Button onPress={handleSuccessBtn}>{successBtn}</Button>
    </Card.Actions>
  </Card>
);

export default CustomCard;
