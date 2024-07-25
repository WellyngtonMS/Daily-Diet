import * as S from './styles';
import { Modal } from 'react-native';
import { Button } from '@components/Button';
import { ModalProps } from 'react-native';

type Props = ModalProps & {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function DeleteModal({ visible, onClose, onConfirm, ...rest }: Props) {
  return (
    <S.Container>
      <Modal {...rest} visible={visible} transparent animationType="slide">
        <S.ModalContainer>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>
          <S.Wrapper>
            <Button title="Cancelar" variant="secondary" onPress={onClose} style={{ flex: 1 }} />
            <Button title="Sim, excluir" onPress={onConfirm} style={{ flex: 1 }} />
          </S.Wrapper>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}