import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '아이디' })
  id: number;

  @Column()
  @ApiProperty({ description: '게시글 제목' })
  title: string;

  @Column()
  @ApiProperty({ description: '게시글 내용' })
  content: string;

  @CreateDateColumn()
  @ApiProperty({ description: '게시글 작성일' })
  created_at: string;

  @UpdateDateColumn()
  @ApiProperty({ description: '게시글 수정일' })
  updated_at: string;

  @DeleteDateColumn()
  @ApiProperty({ description: '게시글 삭제일' })
  deleted_at: string;
}
