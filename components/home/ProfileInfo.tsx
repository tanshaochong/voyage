import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileInfo() {
  return (
    <div className="space-y-4 h-fit mb-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Leadership</p>
          <p className="text-sm text-muted-foreground">
            Effective Communication
          </p>
        </div>
        <div className="ml-10 mr-5 font-medium">80</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Crane</p>
          <p className="text-sm text-muted-foreground">Advanced Remoting</p>
        </div>
        <div className="ml-auto mr-5 font-medium">90</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Teamwork</p>
          <p className="text-sm text-muted-foreground">Team-based Thinking</p>
        </div>
        <div className="ml-auto mr-5 font-medium">90</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Python</p>
          <p className="text-sm text-muted-foreground">Coding Fundamentals</p>
        </div>
        <div className="ml-auto mr-5 font-medium">45</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wellbeing</p>
          <p className="text-sm text-muted-foreground">
            Wellbeing fundamentals
          </p>
        </div>
        <div className="ml-auto mr-5 font-medium">30</div>
      </div>
    </div>
  );
}
