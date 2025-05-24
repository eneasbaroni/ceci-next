interface IMemora {
  ci: string;
  nombre: string;
  apellido: string;
  email: string;
  codigo?: string;
  link: string;
}

interface IProps {
  info: IMemora[];
}

const Info = ({ info }: IProps) => {
  console.log("🚀 ~ Info ~ info:", info);
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-2 pt-2">
      {info.length === 0 && (
        <div className="w-full border p-2 rounded-md">
          <h3 className="m-0 p-0 text-center mobile:text-xl">
            No hay informacion
          </h3>
        </div>
      )}

      {info.length > 0 &&
        info.map((item) => (
          <div
            key={item.ci}
            className="w-full border p-2 rounded-md shadow-md mobile:[&>p]:text-sm"
          >
            <h3 className="m-0 p-0">{item.ci}</h3>
            <p>Nombre: {item.nombre}</p>
            <p>Apellido: {item.apellido}</p>
            <p>Email: {item.email}</p>
            <p>Codigo: {item.codigo}</p>
            <p className="break-all">Link: {item.link}</p>
          </div>
        ))}
    </div>
  );
};

export default Info;
