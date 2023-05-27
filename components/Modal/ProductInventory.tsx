import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { api } from '../../lib/api'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
  },
  overlay: { zIndex: 20, backgroundColor: '#0A0F20aa', margin: '0' },
}

interface SupplierModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

const productFormSchema = z.object({
  sku: z.string(),
  supplierId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  cost: z.string(),
  stock: z.string(),
})

type ProductFormSchema = z.infer<typeof productFormSchema>

export default function ProductModal({
  isModalOpen,
  closeModal,
}: SupplierModalProps) {
  const { register, handleSubmit } = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
  })

  async function onFormSubmit(data: ProductFormSchema) {
    try {
      await api.post('/add-product', {
        sku: data.sku,
        supplierId: data.supplierId,
        name: data.name,
        description: data.description,
        price: data.price,
        cost: data.cost,
        stock: parseInt(data.stock),
      })

      window.location.reload()
    } catch (err) {
      if (err) throw err
    }
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-center text-3xl font-black leading-relaxed">
          Adicionar fornecedor
        </h1>

        <form
          className="mt-8 flex flex-col items-center gap-3"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <input
            type="text"
            placeholder="SKU"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('sku')}
          />

          <input
            type="text"
            placeholder="CNPJ"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('supplierId')}
          />

          <input
            type="text"
            placeholder="Nome"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('name')}
          />

          <input
            type="text"
            placeholder="Descrição"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('description')}
          />

          <input
            type="text"
            placeholder="Preço"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('price')}
          />

          <input
            type="text"
            placeholder="Custo"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('cost')}
          />

          <input
            type="number"
            placeholder="Estoque"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('stock')}
          />

          <button
            className="rounded-lg bg-green-500 px-6 py-2 text-white outline-none transition hover:bg-green-600 focus:ring focus:ring-green-600"
            type="submit"
          >
            Adicionar produto
          </button>
        </form>
      </Modal>
    </>
  )
}
