import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function SeriesDropdown() {
  return (
    <div className="flex justify-center gap-6 mt-10">
      {/* Signature Series */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button 
              className="rounded-full bg-main text-white px-8 py-4 text-lg shadow-lg 
                         hover:shadow-2xl hover:brightness-110 transition-all duration-300"
            >
              Redhot Signature Series
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 bg-white dark:bg-red-900 text-main/80 dark:text-white 
                     shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95"
        >
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/books/sudef">SUDEF</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/books/picture-books">Picture Books</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/books/shizu">SHIZU</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/books/anthologies">Best African Anthologies</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/books/case-crackers">
              Case Crackers <span className="ml-2 text-xs text-yellow-600">(Upcoming)</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Redhot Live */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button 
              className="rounded-full bg-main text-white px-8 py-4 text-lg shadow-lg 
                         hover:shadow-2xl hover:brightness-110 transition-all duration-300"
            >
              Redhot Live
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
            </Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 bg-white dark:bg-red-900 text-main/80 dark:text-white 
                     shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95"
        >
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/live/events">Upcoming Events</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-main/10 dark:hover:bg-red-800">
            <Link to="/live/sessions">Storytelling Sessions</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
