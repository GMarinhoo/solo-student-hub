import { useState } from 'react';
import { Edit } from 'lucide-react';
import { Student, StudentUpdateData } from '@/types/student';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditProfileDialogProps {
  student: Student;
  onUpdate: () => void;
}

export const EditProfileDialog = ({ student, onUpdate }: EditProfileDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<StudentUpdateData>({
    full_name: student.full_name,
    course: student.course,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('students')
        .update(formData)
        .eq('user_id', student.user_id);

      if (error) throw error;

      toast.success('Perfil atualizado com sucesso!');
      setOpen(false);
      onUpdate();
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error.message || 'Erro ao atualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 gradient-primary border-0 shadow-elegant hover:shadow-lg transition-all">
          <Edit className="w-4 h-4" />
          Editar Perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] gradient-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">Editar Perfil</DialogTitle>
          <DialogDescription>
            Atualize suas informações pessoais abaixo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="full_name">Nome Completo</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                required
                placeholder="Seu nome completo"
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Curso</Label>
              <Input
                id="course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                required
                placeholder="Nome do curso"
                className="bg-background/50"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading} className="gradient-primary border-0">
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
