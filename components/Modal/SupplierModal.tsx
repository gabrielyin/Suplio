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

const supplierFormSchema = z.object({
  cnpj: z.string(),
  rsocial: z.string(),
  email: z.string().email(),
  name: z.string(),
  address: z.string(),
})

type SupplierFormData = z.infer<typeof supplierFormSchema>

export default function SupplierModal({
  isModalOpen,
  closeModal,
}: SupplierModalProps) {
  const { register, handleSubmit } = useForm<SupplierFormData>({
    resolver: zodResolver(supplierFormSchema),
  })

  async function onFormSubmit(data: SupplierFormData) {
    try {
      await api.post('/add-supplier', {
        cnpj: data.cnpj,
        rsocial: data.rsocial,
        email: data.email,
        name: data.name,
        address: data.address,
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
            placeholder="CNPJ"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('cnpj')}
          />

          <input
            type="text"
            placeholder="Razão social"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('rsocial')}
          />

          <input
            type="text"
            placeholder="Email"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('email')}
          />

          <input
            type="text"
            placeholder="Nome do responsável"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('name')}
          />

          <input
            type="text"
            placeholder="Endereço comercial"
            className="mx-auto block rounded-lg border px-2 py-1 outline-none transition focus:ring"
            autoFocus
            {...register('address')}
          />

          <button
            className="rounded-lg bg-green-500 px-6 py-2 text-white outline-none transition hover:bg-green-600 focus:ring focus:ring-green-600"
            type="submit"
          >
            Adicionar fornecedor
          </button>
        </form>
      </Modal>
    </>
  )
}
