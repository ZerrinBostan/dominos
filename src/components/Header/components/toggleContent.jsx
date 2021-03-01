import { PriceArea, TotalPriceArea } from './header.styled';

const ToggleContent = ({ count, data = [] }) => {
  console.log('data :>> ', data);
  let totalPrice;
  if (data.length > 0) {
    totalPrice = data
      ?.map((item) => item.price * item.count)
      .reduce((a, b) => a + b);
  }

  console.log('totalPrice :>> ', totalPrice);
  return (
    <>
      <PriceArea>
        {count !== 0 ? (
          data?.map((item) => (
            <p>{`Kategori: ${item?.count} Adet ${item?.title} Ücret: ${item?.price} TL`}</p>
          ))
        ) : (
          <span>Sepetinizde Ürün Bulunmamaktadır.</span>
        )}
      </PriceArea>
      <TotalPriceArea>{`Toplam Fiyat: ${totalPrice || 0} TL`} </TotalPriceArea>
    </>
  );
};
export default ToggleContent;
