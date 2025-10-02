import { User, BookOpen, Mail } from 'lucide-react';
import { Student } from '@/types/student';
import { Card } from '@/components/ui/card';

interface ProfileCardProps {
  student: Student;
}

export const ProfileCard = ({ student }: ProfileCardProps) => {
  return (
    <Card className="p-8 gradient-card shadow-elegant border-0 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-5 rounded-full blur-3xl -z-10" />
      
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-elegant">
            <User className="w-12 h-12 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-card" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">{student.full_name}</h2>
          <p className="text-muted-foreground">Perfil do Aluno</p>
        </div>

        <div className="w-full space-y-4 pt-4">
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground font-medium">Email</p>
              <p className="text-sm font-semibold">{student.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground font-medium">Curso</p>
              <p className="text-sm font-semibold">{student.course}</p>
            </div>
          </div>
        </div>

        <div className="w-full pt-2">
          <div className="text-xs text-muted-foreground text-center">
            Membro desde {new Date(student.created_at).toLocaleDateString('pt-BR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};
