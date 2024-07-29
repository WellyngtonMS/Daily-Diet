import { Button } from '@components/Button';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MealData } from '@storage/meals/mealStorageDTO';

type Props = {
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'GOOD' | 'BAD';
  titleButton: string;
  onSubmit: (data: MealData) => void;
};

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export function Form({ title, description, date, time, type, titleButton, onSubmit }: Props) {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  

  const [formData, setFormData] = useState<MealData>({
    id: generateRandomId(),
    title,
    description,
    date,
    time,
    type,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChangeFormatDate = (value: string) => {
    let formattedDate = value.replace(/[^0-9]/g, '');
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }
    if (formattedDate.length > 5) {
      formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5)}`;
    }
    setFormData({ ...formData, date: formattedDate });
  };

  const handleChangeFormatTime = (value: string) => {
    let formattedTime = value.replace(/[^0-9]/g, '');
    if (formattedTime.length > 2) {
      formattedTime = `${formattedTime.slice(0, 2)}:${formattedTime.slice(2)}`;
    }
    setFormData({ ...formData, time: formattedTime });
  };

  const handleChangeType = (value: 'GOOD' | 'BAD') => {
    setFormData({ ...formData, type: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title) newErrors.name = 'Nome é obrigatório';
    if (!formData.description) newErrors.description = 'Descrição é obrigatória';
    if (!formData.date) newErrors.date = 'Data é obrigatória';
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.date)) newErrors.date = 'Data inválida';
    if (!formData.time) newErrors.time = 'Hora é obrigatória';
    if (!/^\d{2}:\d{2}$/.test(formData.time)) newErrors.time = 'Hora inválida';
    if (!formData.type) newErrors.type = 'Informe se a refeição está dentro da dieta';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit({ ...formData });
    navigation.navigate('feedback', { type: formData.type });
  };

  return (
    <>
      <S.WrapperInput>
        <S.Title>Nome</S.Title>
        <S.Input
          placeholder='Nome da refeição'
          value={formData.title}
          onChangeText={(value) => setFormData({ ...formData, title: value })}
        />
        {errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}
      </S.WrapperInput>
      <S.WrapperInput>
        <S.Title>Descrição</S.Title>
        <S.Input
          placeholder='Descrição da refeição'
          value={formData.description}
          onChangeText={(value) => setFormData({ ...formData, description: value })}
          multiline
          numberOfLines={5}
          style={{ height: 100 }}
        />
        {errors.description && <S.ErrorText>{errors.description}</S.ErrorText>}
      </S.WrapperInput>

      <S.Wrapper>
        <S.WrapperText>
          <S.Title>Data</S.Title>
          <S.Input
            placeholder='DD/MM/AAAA'
            value={formData.date}
            onChangeText={(value) => handleChangeFormatDate(value)}
            keyboardType='numeric'
            maxLength={10}
          />
          {errors.date && <S.ErrorText>{errors.date}</S.ErrorText>}
        </S.WrapperText>
        <S.WrapperText style={{ marginRight: 0 }}>
          <S.Title>Hora</S.Title>
          <S.Input
            placeholder='HH:MM'
            value={formData.time}
            onChangeText={(value) => handleChangeFormatTime(value)}
            keyboardType='numeric'
            maxLength={5}
          />
          {errors.time && <S.ErrorText>{errors.time}</S.ErrorText>}
        </S.WrapperText>
      </S.Wrapper>

      <S.Title>Está dentro da dieta?</S.Title>
      <S.WrapperInput>
        <S.Wrapper>
          <S.WrapperText style={{ marginRight: 8 }}>
            <S.Content type="GOOD" isSelected={formData.type === 'GOOD'} onPress={() => handleChangeType('GOOD')}>
              <S.Icon color={COLORS.GREEN_100} />
              <S.Text>Sim</S.Text>
            </S.Content>
          </S.WrapperText>

          <S.WrapperText style={{ marginRight: 0 }}>
            <S.Content type="BAD" isSelected={formData.type === 'BAD'} onPress={() => handleChangeType('BAD')}>
              <S.Icon color={COLORS.RED_100} />
              <S.Text>Não</S.Text>
            </S.Content>
          </S.WrapperText>
        </S.Wrapper>
        {errors.type && <S.ErrorText>{errors.type}</S.ErrorText>}
      </S.WrapperInput>

      <S.ButtonWrapper>
        <Button title={titleButton} onPress={() => handleSubmit()} />
      </S.ButtonWrapper>
    </>
  );
}
