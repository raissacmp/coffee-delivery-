import { MapPinLine } from "phosphor-react";
import {
  ContainerTitleForm,
  FormAddressContainer,
  InputFormCepAndNumberAndDistrict,
  InputFormStreet,
  InputFormComplement,
  InputFormCity,
  InputFormUf,
  MainFormAdress,
  FormAddressLines,
} from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";

export function FormAddress() {
  const { register, handleSubmit } = useForm();
  const { handleCreateAddress } = useContext(ProductsSelectedContext);

  return (
    <MainFormAdress>
      <ContainerTitleForm>
        <MapPinLine size={20} color="#c47f17" />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </ContainerTitleForm>
      <FormAddressContainer onBlur={handleSubmit(handleCreateAddress)}>
        <InputFormCepAndNumberAndDistrict
          type="number"
          placeholder="CEP"
          {...register("cep")}
        />
        <InputFormStreet type="text" placeholder="Rua" />
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="number"
            placeholder="Número"
            {...register("number")}
          />
          <InputFormComplement
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </FormAddressLines>
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="text"
            placeholder="Bairro"
            {...register("district")}
          />
          <InputFormCity
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />
          <InputFormUf type="text" placeholder="UF" {...register("uf")} />
        </FormAddressLines>
      </FormAddressContainer>
    </MainFormAdress>
  );
}
