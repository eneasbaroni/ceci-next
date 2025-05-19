"use server";
import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const handleSubmit = async (prevState: any, formData: FormData) => {
    const ci = formData.get("ci");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const codigo = formData.get("codigo");
    const link = formData.get("link");

    const data = { ci, nombre, apellido, email, codigo, link };

    try {
        const res = await fetch(`${baseUrl}/api/memora`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            return {
                error: errorData?.message || "Error al guardar los datos",
            };
        }

        /* const result = await res.json();
        console.log(result); */

        return { success: "Datos guardados correctamente" }; // Devolver un estado de éxito
    } catch (error) {
        // console.error("Error al guardar los datos:", error);
        return { error: "Error inesperado al guardar los datos" }; // Devolver un estado de error
    }
};
