import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { authService } from '../../../app/services/authService';
import { useMutation } from '@tanstack/react-query';
import { SignUpParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z.string()
    .min(1, 'Nome é obrigatório.'),
  email: z.string()
    .min(1, 'E-mail é obrigatório.')
    .email('Informe um e-mail é válido.'),
  password: z.string()
    .min(8, 'Senha deve conter pelo menos 8 dígitos.')
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SignUpParams) => authService.signup(data),
  });

  console.log({isPending})

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const { accessToken } = await mutateAsync(data);

    console.log(accessToken)
  })

  return { handleSubmit, register, errors }
}
